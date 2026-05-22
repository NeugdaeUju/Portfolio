import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

import Hero_left from '../components/Hero_Left';

function Accueil() {
    return (
        <>
            <main className='page-accueil'>
                <section className='hero'>
                    <Hero_left />
                    <div className='hero-visual'>
                        <div>
                            <h2>LP</h2>
                            <h3>profil</h3>
                            <p>La rigueur du code, la vision du terrain.</p>
                        </div>
                        <div>
                            <div>
                                <h3>6</h3>
                                <p>Mois en RH</p>
                            </div>
                            <div>
                                <h3>5+</h3>
                                <p>Projets web</p>
                            </div>
                        </div>
                    </div>

                </section>
            </main>
        </>
    )
}

export default Accueil