import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

function Accueil() {
    return (
        <>
            <div className='page-accueil'>
                <div className='page-accueil__presentation'>
                    <h1 className='page-accueil__presentation--title'>Leïla Pelletier</h1>
                    <p className='page-accueil__presentation--description'>Description</p>
                </div>
                <nav className='page-accueil__nav'>
                    <NavLink to='/works' className='page-accueil__nav--link'>Works</NavLink>
                    <NavLink to='/about' className='page-accueil__nav--link'>About</NavLink>
                    <NavLink to='/contact' className='page-accueil__nav--link'>Contact</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Accueil