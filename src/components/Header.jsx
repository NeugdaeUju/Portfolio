import {NavLink , useLocation} from 'react-router-dom'
import '../assets/sass/header.scss'

function Header ({ hideHeader = ['/']}) {
    const location = useLocation()
    const showHeader = !hideHeader.includes(location.pathname)

    return (
        <>
            <header className='header'>
                {showHeader &&(
                <nav className='header__nav'>
                    <NavLink to='/' className='header__nav--link'>Home</NavLink>
                    <NavLink to='/works' className='header__nav--link'>Works</NavLink>
                    <NavLink to='/about' className='header__nav--link'>About</NavLink>
                </nav>
                )}
            </header>
        </>
    )
}

export default Header