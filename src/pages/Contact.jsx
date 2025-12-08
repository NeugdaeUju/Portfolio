import Header from '../components/Header'
import {Link} from 'react-router-dom'
import '../assets/sass/contact.scss'
import linkedinLogo from '../assets/images/linkedin.png'
import githubLogo from '../assets/images/github-logo.png'

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
                    <Link to="https://github.com/neugdaeUju" className='contact-page__links--link' target="_blank">
                        <img src={githubLogo} className="contact-page__links--image"/>
                    </Link>
                    <Link to="https://linkedin.com" className='contact-page__links--link' target="_blank">
                        <img src={linkedinLogo} className="contact-page__links--image"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Contact