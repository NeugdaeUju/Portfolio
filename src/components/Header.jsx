import {NavLink , useLocation} from 'react-router-dom'
import '../assets/sass/header.scss'

function Header ({ hideHeader = ['/']}) {
    const location = useLocation()
    const showHeader = !hideHeader.includes(location.pathname)

    const work = location.pathname === '/works'
        ? 'active'
        : ""
    
    const about = location.pathname === '/about'
        ? 'active'
        : ""

    return (
        <>
            <header className='header'>
                {showHeader &&(
                <nav className='header__nav'>
                    <NavLink to='/' className='header__nav--link home'>Home</NavLink>
                    <NavLink to='/works' className='header__nav--link works'>Works</NavLink>
                    <NavLink to='/about' className='header__nav--link about'>About</NavLink>
                </nav>
                )}
            </header>
        </>
    )
}

export default Header