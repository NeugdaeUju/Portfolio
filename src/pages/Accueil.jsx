import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

import Hero_left from '../components/Hero_left';
import Hero_right from '../components/Hero_right'
import Section_title from '../components/Section_title';
import About from '../components/about';
import Skills_card from '../components/Skills_card';
import Project_card from '../components/Project_card';
import Contact from '../components/Contact';

function Accueil() {
    return (
        <>
            <main className='page-accueil'>
                <section className='hero'>
                    <Hero_left />
                    <Hero_right />
                </section>

                <section className='presentation' id="about">
                   <div className='section-title' style={{marginBottom: 0}}>
                        <p className='section-title-nb fade-in visible'>// 01</p>
                        <h2 className='section-title-header fade-in visible'>Qui <br/>suis<i>-je</i>?</h2>
                    </div>
                   <About />
                </section>

                <section id='skills'>
                    <div className='inner-section'>
                        <Section_title num='02' title='Compé' italic_title='-tences' />
                        <div className='skills_cards fade-in visible'>
                            <Skills_card 
                            domaine_sk='dev'
                            domaine='frontend'
                            skill1='HTLM5'
                            skill2='CSS3'
                            skill3='JavaScript'
                            skill4='React'
                            skill5='TypeScript'
                            />
                            <Skills_card 
                            domaine_sk='dev'
                            domaine='outils dev'
                            skill1='GitHub'
                            skill2='Postman'
                            skill3='Vite'
                            skill4='REST API'
                            skill5='MongoDB'
                            />
                            <Skills_card 
                            domaine_sk='rh'
                            domaine='rh & admin'
                            skill1='Recrutement'
                            skill2='Administation RH'
                            skill3="Gestion d'entreprise"
                            skill4='Suivi & reporting'
                            skill5='Process internes'
                            />
                            <Skills_card 
                            domaine_sk='rh'
                            domaine='transversal'
                            skill1='IA & prompting'
                            skill2='Suite office'
                            skill3='Figma (maquettes)'
                            skill4='Autonomie remote'
                            skill5='Apprentissage rapide'
                            />
                        </div>
                    </div>
                </section>

                <section id='projects'>
                    <Section_title num='03' title='Mes ' italic_title='projets'/>
                    <div className='project_cards'>
                        <Project_card 
                        num='01'
                        title='Ici le nom du projet - Le but du projet'
                        description='Ecrire ici la description du projet'
                        compétence1='Skill 1'
                        compétence2='skill 2'
                        compétence3='skill 3'
                        compétence4='skill 4'
                        />
                    </div>
                </section>

                <section id='contact'>
                     <Contact />
                </section>
            </main>
        </>
    )
}

export default Accueil