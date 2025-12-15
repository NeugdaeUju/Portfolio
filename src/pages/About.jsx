import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../assets/sass/about.scss'

function About () {
    return (
        <>
            <Header
                page='About' />
            <main className='about-page'>
                <section className='about-page__section-who'>
                    <h2 className='about-page__section-who--subtitle'>Qui suis-je?</h2>
                    <p className='about-page__section-who--text'>Intégratrice web, je conçois et développe des interfaces claires, accessibles et cohérentes, avec une attention particulière portée aux détails et à l’expérience utilisateur. J’aime transformer une intention ou une maquette en une interface fonctionnelle, fluide et maintenable.
<br></br>
<br></br>
Mon approche repose sur une intégration propre, structurée et évolutive. Je travaille principalement avec des composants réutilisables, en veillant à la lisibilité du code et à la cohérence visuelle sur l’ensemble du projet. Curieuse et rigoureuse, j’accorde autant d’importance à la qualité technique qu’au rendu final.</p>
                    <Link to='/works' className='about-page__section-who--link'>Mon Portfolio</Link>
                </section>
                <section className='about-page__section-how'>
                    <h2 className='about-page__section-how--subtitle'>Mon parcours</h2>
                    <p className='about-page__section-how--text'>Après une formation orientée vers le développement et l’intégration web, j’ai progressivement affiné ma manière de travailler à travers différents projets, allant de pages statiques à des interfaces plus dynamiques basées sur React. Ces expériences m’ont permis de consolider mes bases techniques tout en développant une méthode de travail structurée.
<br></br>
<br></br>
Chaque projet est pour moi l’occasion d’expérimenter, d’améliorer mes pratiques et de renforcer ma compréhension des enjeux front-end : découpage en composants, responsive design, animations légères, maintenabilité du code. Aujourd’hui, je continue à enrichir mon portfolio avec des projets personnels et professionnels, dans une logique d’apprentissage continu et d’évolution.
</p>
                </section>
                <section className='about-page__section-skills'>
                    <div className='about-page__section-skills__hard-skills'>
                        <h2 className='about-page__section-skills__hard-skills--subtitle'>Hard Skills</h2>
                        <div className='about-page__section-skills__hard-skills__list'>
                            <p className='about-page__section-skills__hard-skills__list--item'>Lorem ipsum</p>
                        </div> 
                    </div>
                    <div className='about-page__section-skills__soft-skills'>
                        <h2 className='about-page__section-skills__soft-skills--subtitle'>Soft Skills</h2>
                        <div className='about-page__section-skills__soft-skills__list'>
                            <p className='about-page__section-skills__soft-skills__list--item'>Lorem ipsum</p>
                        </div> 
                    </div>
                </section>
                <section className='about-page__section-links'>
                    <h2 className='about-page__section-links--subtitle'>Links</h2>
                    <div className='about-page__section-links__list'>
                        <Link to='/works' className='about-page__section-links__list--link'>Mon portfolio</Link>
                        <Link to='/contact' className='about-page__section-links__list--link'>Me contacter</Link>
                        <Link to='' className='about-page__section-links__list--link'>Mon CV</Link>
                    </div>
                </section>
            </main>
        </>
    )
}

export default About