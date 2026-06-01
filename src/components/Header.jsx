import '../assets/sass/header.scss'

function Header () {
    
    return (
        <>
            <header className='header'>
                <a href="#" className='header__logo'>LP<span className='span'>Développeuse · RH</span></a>
                <nav className='header__nav'>
                    <ul>
                        <li><a className='header__nav__item' href='#about'>A propos</a></li>
                        <li><a className='header__nav__item' href='#skills'>Compétences </a></li>
                        <li><a className='header__nav__item' href='#projects'>Projets</a></li>
                        <li><a className='header__nav__item' href='#experience'>Expérience</a></li>
                        <li><a className='header__nav__button' href='#contact'>Me contacter</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header