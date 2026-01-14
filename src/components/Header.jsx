import {NavLink} from 'react-router-dom'
import '../assets/sass/header.scss'

function Header () {
    return (
        <>
            <header className='header'>
                <nav className='header__nav'>
                    <NavLink to='/' className='header__nav--link'>Home</NavLink>
                    <NavLink to='/works' className='header__nav--link'>Works</NavLink>
                    <NavLink to='/about' className='header__nav--link'>About</NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header