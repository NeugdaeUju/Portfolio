import '../assets/sass/caroussel.scss'
import { useState , useRef , useEffect } from 'react'
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6"

function Caroussel ({ images = [], altText = '' }) {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [locked, setLocked] = useState(false)
    const [lightboxIdx, setLightboxIdx] = useState(null) // null = lightbox fermée
    const containerRef = useRef(null)
    const touchStartY = useRef(null)

    const resolveUrl = (src) => {
        if (!src) return null
        if (src.startsWith('http') || src.startsWith('data:')) return src
        try { return new URL(`../assets/images/${src}`, import.meta.url).href } catch { return null }
    }

    const urls = (Array.isArray(images) ? images : []).map(resolveUrl)

    const throttle = (ms = 350) => {
        setLocked(true)
        setTimeout(() => setLocked(false), ms)
    }

    const prev = () => {
        if (locked || urls.length === 0) return
        setCurrentIdx(i => Math.max(0, i - 1))
        throttle()
    }

    const next = () => {
        if (locked || urls.length === 0) return
        setCurrentIdx(i => Math.min(urls.length - 1, i + 1))
        throttle()
    }

    const openLightbox = (idx) => {
        setLightboxIdx(idx)
        document.body.style.overflow = 'hidden' // empêche scroll arrière-plan
    }

    const closeLightbox = () => {
        setLightboxIdx(null)
        document.body.style.overflow = 'auto' // réactive scroll
    }

    const lightboxPrev = (e) => {
        e.stopPropagation()
        if (lightboxIdx > 0) setLightboxIdx(lightboxIdx - 1)
    }

    const lightboxNext = (e) => {
        e.stopPropagation()
        if (lightboxIdx < urls.length - 1) setLightboxIdx(lightboxIdx + 1)
    }

    // closeOnEscape
    useEffect(() => {
        const onKeyDown = (e) => {
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowLeft' && lightboxIdx !== null) lightboxPrev({stopPropagation: () => {}})
            if (e.key === 'ArrowRight' && lightboxIdx !== null) lightboxNext({stopPropagation: () => {}})
        }
        if (lightboxIdx !== null) {
            document.addEventListener('keydown', onKeyDown)
            return () => document.removeEventListener('keydown', onKeyDown)
        }
    }, [lightboxIdx])

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const onWheel = (e) => {
            if (!urls.length || lightboxIdx !== null) return // ignore si lightbox ouverte
            const delta = e.deltaY
            if (Math.abs(delta) < 5 || locked) { if (locked) e.preventDefault(); return }
            if (delta > 0 && currentIdx < urls.length - 1) { e.preventDefault(); setCurrentIdx(i => i + 1); throttle(); return }
            if (delta < 0 && currentIdx > 0) { e.preventDefault(); setCurrentIdx(i => i - 1); throttle(); return }
        }

        const onTouchStart = (e) => { touchStartY.current = e.touches?.[0]?.clientY ?? null }
        const onTouchMove = (e) => {
            if (locked || lightboxIdx !== null) { e.preventDefault(); return }
            const startY = touchStartY.current
            if (startY == null) return
            const currentY = e.touches?.[0]?.clientY ?? 0
            const diff = startY - currentY
            if (Math.abs(diff) < 20) return
            if (diff > 0 && currentIdx < urls.length - 1) { e.preventDefault(); setCurrentIdx(i => i + 1); throttle(); touchStartY.current = null; return }
            if (diff < 0 && currentIdx > 0) { e.preventDefault(); setCurrentIdx(i => i - 1); throttle(); touchStartY.current = null; return }
        }

        container.addEventListener('wheel', onWheel, { passive: false })
        container.addEventListener('touchstart', onTouchStart, { passive: true })
        container.addEventListener('touchmove', onTouchMove, { passive: false })

        return () => {
            container.removeEventListener('wheel', onWheel)
            container.removeEventListener('touchstart', onTouchStart)
            container.removeEventListener('touchmove', onTouchMove)
        }
    }, [urls, currentIdx, locked, lightboxIdx])

    if (!urls.length) return <p className='caroussel__empty'>Aucune image disponible</p>

    return (
        <>
            <div ref={containerRef} className='caroussel'>
                {/* flèches */}
                <button type="button" className="caroussel__button--prev" onClick={prev} aria-label="Image précédente">
                    <FaAngleLeft className="caroussel__button--icon"/>
                </button>
                <button type="button" className="caroussel__button--next" onClick={next} aria-label="Image suivante">
                    <FaAngleRight className="caroussel__button--icon"/>
                </button>

                {urls.map((u, i) => (
                    <img
                        key={i}
                        src={u || ''}
                        alt={`${altText} ${i + 1}`}
                        className={`caroussel__image ${i === currentIdx ? 'active' : ''}`}
                        onClick={() => openLightbox(i)} // ← clic pour agrandir
                        style={{ cursor: 'pointer' }}
                    />
                ))}
            </div>

            {/* Lightbox modal */}
            {lightboxIdx !== null && (
                <div className='lightbox' onClick={closeLightbox}>
                    <div className='lightbox__content' onClick={(e) => e.stopPropagation()}>
                        <button type="button" className='lightbox__close' onClick={closeLightbox} aria-label="Fermer">✕</button>
                        <img src={urls[lightboxIdx] || ''} alt={`${altText} ${lightboxIdx + 1}`} className='lightbox__image' />
                        
                        {urls.length > 1 && (
                            <>
                                <button type="button" className='lightbox__btn lightbox__btn--prev' onClick={lightboxPrev} aria-label="Image précédente">
                                    <FaAngleLeft />
                                </button>
                                <button type="button" className='lightbox__btn lightbox__btn--next' onClick={lightboxNext} aria-label="Image suivante">
                                    <FaAngleRight />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Caroussel