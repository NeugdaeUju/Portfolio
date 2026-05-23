import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

import Hero_left from '../components/Hero_left';
import Hero_right from '../components/Hero_right'
import Section_title from '../components/Section_title';
import About from '../components/about';

function Accueil() {
    return (
        <>
            <main className='page-accueil'>
                <section className='hero'>
                    <Hero_left />
                    <Hero_right />
                </section>

                <section className='presentation' id="about">
                   <Section_title num='01' title='Qui' sec_title='suis' italic_title='-je' point=' ?' />
                   <About />
                    
                </section>
            </main>
        </>
    )
}

export default Accueil