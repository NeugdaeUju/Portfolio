import '../assets/sass/processStep.scss'

function ProcessSteps ({step, elements}) {
    return (
        <>
            <div className='works-page__process__step-section'>
                <h3 className='works-page__process__step-section--title'>{step}</h3>
                <div className='works-page__process__step-section__container'>
                    {Array.isArray(elements) && elements.map((el, idx) => {
                        if (el.type === 'image' && el.src) {
                            try {
                                const imgUrl = new URL(`../assets/images/${el.src}`, import.meta.url).href
                                return (
                                    <div className='works-page__process__step-section__container__images'
                                         key={idx}>
                                        <div className='works-page__process__step-section__container__images--gradient'></div>
                                        <img src={imgUrl}
                                             alt={el.caption} 
                                             className='works-page__process__step-section__container__images--image'
                                             onError={(e) => console.error('Image non trouvée:', el.src)}
                                        />
                                    </div>
                                )
                            } catch (err) {
                                console.error('Erreur URL:', el.src, err)
                                return null
                            }
                        }
                        if (el.type === 'text' && el.content) {
                            return (
                                <div className='works-page__process__step-section__container__description'
                                     key={idx}>
                                    <p className='works-page__process__step-section__container__description__text'>
                                       {el.content}
                                    </p>
                                </div>
                            )
                        }
                        return null
                    })}                    
                </div>
            </div>
        </>
    )
}

export default ProcessSteps

{/* function ProcessSteps ({step , image , text, elements}) {
    return (
        <>
            <div className='works-page__process__step-section'>
                <h3 className='works-page__process__step-section--title'>{step}</h3>
                <div className='works-page__process__step-section__container'>
                    {Array.isArray(elements) && elements.map((el, idx) => (
                        el.type === 'image' && el.src ? (
                            <div className='works-page__process__step-section__container__images'
                                 key={idx}>
                                <div className='works-page__process__step-section__container__images--gradient'></div>
                                <img src={new URL(`../assets/images/${el.src}`, import.meta.url).href}
                                     alt={el.caption} 
                                     className='works-page__process__step-section__container__images--image'/>
                            </div>
                        ) : el.type === 'text' ? (
                            <div className='works-page__process__step-section__container__description'
                                 key={idx}>
                                <p className='works-page__process__step-section__container__description__text'>
                                   {el.content}
                                </p>
                            </div>
                        ) : null
                    ))}                    
                </div>
            </div>
        </>
    )
} */}