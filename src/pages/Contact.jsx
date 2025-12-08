import Header from '../components/Header'
import {Link} from 'react-router-dom'

function Contact () {
    return (
        <>
            <Header 
                page='Contact' />
            <div className='contact-page'>
                <div className='contact-page__description'>
                    <p className='contact-page__description--text'>Lorem ipsum</p>
                </div>
                <div className='contact-page__links'>
                    <Link to="https://github.com/neugdaeUju" target="_blank">
                        <img className="contact-page__link--image"/>
                    </Link>
                    <Link to="https://linkedin.com" target="_blank">
                        <img className="contact-page__link--image"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Contact