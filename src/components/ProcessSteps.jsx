import '../assets/sass/processStep.scss'
import Caroussel from '../components/Caroussel'

function ProcessSteps ({step , elements = []}) {
    const images = elements
        .filter(el => el.type === 'image' && el.src)
        .map(el => el.src)
    
    const texts = elements.filter(el => el.type === 'text' && el.content)

    return (
        <>
            <div className='works-page__process__step-section'>
                <h3 className='works-page__process__step-section--title'>{step}</h3>
                <div className='works-page__process__step-section__container'>
                   
                    {images.length > 0 && (
                        <div className='works-page__process__step-section__container__images'>
                            <Caroussel images={images} altText={step} />
                        </div>
                    )} 
                    <div className='works-page__process__step-section__container__images--gradient'></div>
                    {texts.length > 0 && (
                        <div className='works-page__process__step-section__container__description'>
                            {texts.map((el, idx) => (
                                <p key={idx}  className='works-page__process__step-section__container__description__text'>{el.content}</p>
                            ))}
                        </div>
                    )

                    }          
                </div>
            </div>
        </>
    )
}

export default ProcessSteps

{/* {Array.isArray(elements) && elements.map((el, idx) => (
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
                    ))} */}