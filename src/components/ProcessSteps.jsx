import '../assets/sass/processStep.scss'

function ProcessSteps ({step , image , text}) {
    return (
        <>
            <div className='works-page__process__step-section'>
                <h3 className='works-page__process__step-section--title'>{step}</h3>
                <div className='works-page__process__step-section__container'>
                    <img src={image}
                         className='works-page__process__step-section__container--image'/>
                    <p className='works-page__process__step-section__container--text'>{text}</p>
                </div>
            </div>
        </>
    )
}

export default ProcessSteps