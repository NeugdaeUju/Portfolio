import Header from '../components/Header'

function About () {
    return (
        <>
            <Header
                page='About' />
            <div className='about-page'>
                <div className='about-page__descriptions'>
                    <h2 className='about-page__description--subtitle'>Leïla Pelletier</h2>
                    <p calssName='about-page__description--text'>Lorem ipsum</p>
                </div>
                <div className='about-page__photo'>
                    <img className='about-page__photo--image'/>
                </div>
            </div>
        </>
    )
}

export default About