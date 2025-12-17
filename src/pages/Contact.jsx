import Header from '../components/Header'
import {Link} from 'react-router-dom'
import '../assets/sass/contact.scss'
import linkedinLogo from '../assets/images/linkedin.webp'
import githubLogo from '../assets/images/github-logo.webp'

function Contact () {
    return (
        <>
            <Header 
                page='Contact' />
            <main className='contact-page'>
                <div className='contact-page__description'>
                    <p className='contact-page__description--text'>Vous pouvez me retrouver et me contacter via GitHub et LinkedIn, où je partage mes projets et mon parcours professionnel.</p>
                </div>
                <div className='contact-page__links'>
                    <Link to="https://github.com/neugdaeUju" className='contact-page__links--link' target="_blank">
                        <img src={githubLogo} className="contact-page__links--image" alt='Logo GitHub' aria-label="Lien vers ma page GitHub"/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/le%C3%AFla-pelletier-672572249/" className='contact-page__links--link' target="_blank">
                        <img src={linkedinLogo} className="contact-page__links--image" alt='Logo Linkedin' aria-label="Lien vers ma page Linkedin"/>
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Contact