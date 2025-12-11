import '../assets/sass/processStep.scss'

function ProcessSteps ({step , image , text}) {
    return (
        <>
            <div className='works-page__process__step-section'>
                <h3 className='works-page__process__step-section--title'>step</h3>
                <div className='works-page__process__step-section__container'>
                    <div className='works-page__process__step-section__container__images'>
                        <div className='works-page__process__step-section__container__images--gradient'></div>
                        <img src=""
                         className='works-page__process__step-section__container__images--image'/>
                    </div>
                    <div className='works-page__process__step-section__container__description'>
                        <p className='works-page__process__step-section__container__description__text'>Lorem Ipsum</p>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProcessSteps