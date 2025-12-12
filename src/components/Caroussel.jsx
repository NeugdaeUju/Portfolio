import '../assets/sass/caroussel.scss'
import { useState , useRef , useEffect } from 'react'

function Caroussel ({ images = [], altText = '' }) {
    const [currentIdx, setCurrentIdx] = useState(0)
    const [locked, setLocked] = useState(false)
    const containerRef = useRef(null)
    const touchStartY = useRef(null)

    const resolveUrl = (src) => {
        if (!src) return null
        if (src.startsWith('http') || src.startsWith('data:')) return src
        try { return new URL(`../assets/images/${src}`, import.meta.url).href } catch { return null }
    }

    // pré-calculer URLs pour éviter new URL à chaque render
    const urls = (Array.isArray(images) ? images : []).map(resolveUrl)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        const throttle = () => { setLocked(true); setTimeout(() => setLocked(false), 350) }

        const onWheel = (e) => {
            if (!urls.length) return
            const delta = e.deltaY
            if (Math.abs(delta) < 5 || locked) { if (locked) e.preventDefault(); return }
            if (delta > 0 && currentIdx < urls.length - 1) { e.preventDefault(); setCurrentIdx(i => i + 1); throttle(); return }
            if (delta < 0 && currentIdx > 0) { e.preventDefault(); setCurrentIdx(i => i - 1); throttle(); return }
        }

        const onTouchStart = (e) => { touchStartY.current = e.touches?.[0]?.clientY ?? null }
        const onTouchMove = (e) => {
            if (locked) { e.preventDefault(); return }
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
    }, [urls, currentIdx, locked])

    if (!urls.length) return <p className='caroussel__empty'>Aucune image disponible</p>

    return (
        <div ref={containerRef} className='caroussel'>
            {urls.map((u, i) => (
                <img
                    key={i}
                    src={u || ''}
                    alt={`${altText} ${i + 1}`}
                    className={`caroussel__image ${i === currentIdx ? 'active' : ''}`}
                    aria-hidden={i === currentIdx ? 'false' : 'true'}
                />
            ))}
        </div>
    )
}
export default Caroussel