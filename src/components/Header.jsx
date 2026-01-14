import {NavLink} from 'react-router-dom'
import '../assets/sass/header.scss'

function Header () {

    return (
        <>
            <header className='header'>
                <nav className='header__nav'>
                    <NavLink to='/'
                             className={({ isActive }) =>
                             isActive ? "header__nav--link-active" : "header__nav--link"
                             } end>
                            Home
                    </NavLink>
                    <NavLink to='/works' 
                             className={({ isActive }) =>
                             isActive ? "header__nav--link-active" : "header__nav--link"
                             } end>
                            Works
                    </NavLink>
                    <NavLink to='/about'
                             className={({ isActive }) =>
                             isActive ? "header__nav--link-active" : "header__nav--link"
                             } end>
                            About
                    </NavLink>
                </nav>
            </header>
        </>
    )
}

export default Header

/*
function Header() {
  return (
    <header>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end
        >
          Accueil
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Projets
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
  */