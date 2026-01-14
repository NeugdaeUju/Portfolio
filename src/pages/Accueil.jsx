import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

function Accueil() {
    return (
        <>
            <div className='page-accueil'>
                <div className='page-accueil__presentation'>
                    <h1 className='page-accueil__presentation--title'>Leïla <br/>Pelletier</h1>
                    <h2 className='page-accueil__presentation--role'><span className='page-accueil__presentation--role-span'>Intégratrice web / développeuse front junior</span>, spécialisée en HTML, CSS, JavaScript et React.</h2>
                    <p className='page-accueil__presentation--description'>
                        Je conçois et intègre des interfaces web accessibles, performantes et responsives à partir de maquettes.
                        <br/>
                        J’ai travaillé sur plusieurs projets concrets impliquant intégration React, consommation d’API et gestion de versions avec Git.
                    </p>
                </div>
                <nav className='page-accueil__nav'>
                    <NavLink to='/works' className='page-accueil__nav--link'>Réalisations</NavLink>
                    <NavLink to='/about' className='page-accueil__nav--link'>A propos</NavLink>
                </nav>
            </div>
        </>
    )
}

export default Accueil