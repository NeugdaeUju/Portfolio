import '../assets/sass/footer.scss'
import { Link } from 'react-router-dom'

function Footer () {
    return (
        <footer className='footer'>
            <p className='footer__text'>@2025 - Leïla Pelletier</p>
            <div className='footer__contact-links'>
                <Link to="https://www.linkedin.com/in/le%C3%AFla-pelletier-672572249/" className='footer__contact-links__link' target='_blank'>LinkedIn</Link>
                <Link to="https://github.com/neugdaeUju" className='footer__contact-links__link' target='_blank'>GitHub</Link>
            </div>
        </footer>
    )
}

export default Footer