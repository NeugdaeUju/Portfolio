import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

function Accueil() {
    return (
        <>
            <main className='page-accueil'>
                <section className='hero'>
                    <div className='hero-prez'>
                        <p className='hero-prez-text'>Disponible Full Remote</p>
                        <h1 className='hero-prez-title'>Développeuse <br/> <em>frontend</em><br/> & RH</h1>
                        <p className='hero-prez-description'>Je construit des <strong>interfaces qui résolvent de vrais problèmes métier</strong> - avec une compréhension opérationnelle des enjeux humains et organisationnels que peu de devs ont.</p>
                        <div className='hero-prez-tags'>
                            <span className='hero-prez-tags-badge badge-dev'>React Vue</span>
                            <span className='hero-prez-tags-badge badge-dev'>TypeScript</span>
                            <span className='hero-prez-tags-badge badge-rh'>RH & Admin</span>
                            <span className='hero-prez-tags-badge badge-rh'>Recrutement</span>
                            <span className='hero-prez-tags-badge badge-neutre'>Full remote</span>
                        </div>
                        <div className='hero-prez-links'>
                            <a href='#project' className='hero-prez-links-button project'>Voir mes projets</a>
                            <a href='#contact' className='hero-prez-links-button contact'>Me contacter</a>
                        </div>
                    </div>


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