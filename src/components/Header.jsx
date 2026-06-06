import { useState } from 'react';
import { FaBars, FaXmark } from "react-icons/fa6";
import '../assets/sass/header.scss'

function Header () {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <header className='header'>
                <a href="#" className='header__logo'>LP<span className='span'>Développeuse · RH</span></a>
                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu de navigation" : "Ouvrir le menu de navigation"} aria-expanded={menuOpen} aria-controls='main-navigation'><FaBars aria-hidden='true' /></button>
                <nav className={`header_nav ${menuOpen ? 'active' : ''}`} id='main-navigation' aria-label="Navigation principale">
                    <button className="menu_close" onClick={() => setMenuOpen(false)} aria-label='Fermer le menu'><FaXmark aria-hidden='true' /></button>
                    <ul>
                        <li><a className='header__nav__item' href='#about' onClick={() => setMenuOpen(false)}>A propos</a></li>
                        <li><a className='header__nav__item' href='#skills' onClick={() => setMenuOpen(false)}>Compétences </a></li>
                        <li><a className='header__nav__item' href='#projects' onClick={() => setMenuOpen(false)}>Projets</a></li>
                        <li><a className='header__nav__item' href='#experience' onClick={() => setMenuOpen(false)}>Expérience</a></li>
                        <li><a className='header__nav__button' href='#contact' onClick={() => setMenuOpen(false)}>Me contacter</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header