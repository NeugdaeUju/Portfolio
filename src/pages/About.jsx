import { Link } from 'react-router-dom'
import '../assets/sass/about.scss'

function About () {
    return (
        <>
        <div className='about'>
                <h1 className='about__title'>A propos</h1>
                <section className='about-section__presentation'>
                    <p className='about-section__presentation__text'>Lors de mon alternance fictive au sein de la start-up Booki, j’ai été chargé d’intégrer la page d’accueil du site à partir des maquettes Figma fournies pour mobile, tablette et desktop. L’objectif était de transformer une base de code existante en une interface complète, fidèle au design et entièrement responsive. </p>
                    <p className='about-section__presentation__contact-text'>Vous pouvez me contacter directement depuis <Link to='https://www.linkedin.com/in/le%C3%AFla-pelletier-672572249/' className='about-section__presentation__contact-text__link'>LinkedIn</Link>, ou voir d’autres projets sur mon profile <Link to='https://github.com/neugdaeUju' className='about-section__presentation__contact-text__link'>GitHub</Link>.</p>
                </section>
                <section className='about-section__competences'>
                    <h2 className='about-section__competences__title'>Compétences</h2>
                    <div className='about-section__competences__skills'>
                        <div className='about-section__competences__division'>
                            <h3 className='about-section__competences__division__title'>Front-End</h3>
                            <div className='about-section__competences__division__lists'>
                                <ul className='about-section__competences__division__lists__items-list'>
                                    <li className='about-section__competences__division__lists__items-list--item'>HTML5</li>
                                    <li className='about-section__competences__division__lists__items-list--item'>CSS3</li>
                                    <li className='about-section__competences__division__lists__items-list--item'>JavaScript</li>
                                    <li className='about-section__competences__division__lists__items-list--item'>React</li>
                                </ul>
                                <div className='about-section__competences__division__lists__jauge-list'>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-10'></div>
                                    </div>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-10'></div>
                                    </div>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-8'></div>
                                    </div>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-7'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='about-section__competences__division'>
                            <h3 className='about-section__competences__division__title'>Back-End</h3>
                            <div className='about-section__competences__division__lists'>
                                <ul className='about-section__competences__division__lists__items-list'>
                                    <li className='about-section__competences__division__lists__items-list--item'>API REST</li>
                                    <li className='about-section__competences__division__lists__items-list--item'>MongoDB</li>
                                    <li className='about-section__competences__division__lists__items-list--item'>Node.js / Express.js</li>
                                </ul>
                                <div className='about-section__competences__division__lists__jauge-list'>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-8'></div>
                                    </div>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-4'></div>
                                    </div>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-7'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='about-section__competences__division'>
                            <h3 className='about-section__competences__division__title'>Outils</h3>
                            <div className='about-section__competences__division__lists'>
                                <ul className='about-section__competences__division__lists__items-list'>
                                    <li className='about-section__competences__division__lists__items-list--item'>Git & GitHub</li>
                                </ul>
                                <div className='about-section__competences__division__lists__jauge-list'>
                                    <div className='about-section__competences__division__lists__jauge-list--bg'>
                                        <div className='about-section__competences__division__lists__jauge-list--jauge-10'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default About