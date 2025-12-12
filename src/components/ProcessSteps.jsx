import '../assets/sass/processStep.scss'

function ProcessSteps ({step , image , text, elements}) {
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
}

export default ProcessSteps