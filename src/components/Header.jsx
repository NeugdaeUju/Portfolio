import {NavLink , useLocation} from 'react-router-dom'
import '../assets/sass/header.scss'

function Header ({ hideWorks = ['/works'] , hideAbout = ['/about'] , hideContact = ['/contact'] , page}) {
    const location = useLocation()
    const showWorks = !hideWorks.includes(location.pathname)
    const showAbout = !hideAbout.includes(location.pathname)
    const showContact = !hideContact.includes(location.pathname)

    return (
        <>
            <header className='header'>
                <h1 className='header__page-title'>{page}</h1>
                <nav className='header__nav'>
                    <NavLink to='/' className='header__nav--link'>Home</NavLink>
                    {showWorks && (
                        <NavLink to='/works' className='header__nav--link'>Works</NavLink>
                    )}
                    {showAbout && (
                        <NavLink to='/about' className='header__nav--link'>About</NavLink>
                    )}
                    {showContact && (
                        <NavLink to='/contact' className='header__nav--link'>Contact</NavLink>
                    )}
                </nav>
            </header>
        </>
    )
}

export default Header