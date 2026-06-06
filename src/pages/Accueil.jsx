import {NavLink} from 'react-router-dom'
import '../assets/sass/accueil.scss'

import Hero_left from '../components/Hero_left';
import Hero_right from '../components/Hero_right'
import Section_title from '../components/Section_title';
import About from '../components/About';
import Skills_card from '../components/Skills_card';
import Project_card from '../components/Project_card';
import Contact from '../components/Contact';
import Experience_card from '../components/Experience_card';
import FadeIn from '../components/FadeIn';

function Accueil() {
    return (
        <>
            <main className='page-accueil'>
                <section className='hero' aria-label='Introduction'>
                    <Hero_left />
                    <Hero_right />
                </section>

                <FadeIn delay={60}><section className='presentation' id="about" aria-label='A propos'>
                   <div className='section-title'>
                        <p className='section-title-nb fade-in visible'>// 01</p>
                        <h2 className='section-title-header fade-in visible'>Qui<br/>suis<i>-je</i>?</h2>
                    </div>
                   <About />
                </section></FadeIn>

                <FadeIn delay={120}><section id='skills'>
                    <div className='inner-section'>
                        <Section_title num='02' title='Compé' italic_title='-tences' />
                        <div className='skills_cards fade-in visible'>
                            <Skills_card 
                            domaine_sk='dev'
                            domaine='frontend'
                            skill1='HTML5'
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
                            skill2='Administration RH'
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
                </section></FadeIn>

                <FadeIn delay={180}><section id='projects' aria-label='Projets'>
                    <Section_title num='03' title='Mes ' italic_title='projets'/>
                    <div className='project_cards'>
                        <Project_card 
                        num='01'
                        title='ArgentBank - Migration React & Redux'
                        description="Reprise d'un site bancaire codé en HTML statique, migré intégralement vers React. Mise en place d'un store Redux, connexion à une API existante et rédaction de nouvelles routes dans la documentation Swagger pour le développement futur."
                        competence1='React'
                        skill1_cat='dev'
                        competence2='Redux Toolkit'
                        skill2_cat='dev'
                        competence3='API REST'
                        skill3_cat='dev'
                        competence4='Swagger'
                        skill4_cat='dev'
                        competence5='Migration codebase'
                        skill5_cat='neutre'
                        GitLink='https://github.com/NeugdaeUju/ArgentBank-Frontend'
                        DemoLink='https://argent-bank-frontend-smoky.vercel.app/'
                        decision1='Deux slices Redux distincts'
                        decision1_text=' — Séparation de la logique de connexion et des informations utilisateur dans deux parties indépendantes du store. Chaque slice a sa responsabilité claire.'
                        decision2='Centralisation des appels API'
                        decision2_text='Centralisation des appels API — Tous les appels sont regroupés dans un seul fichier. Modifier un endpoint ne nécessite pas de chercher dans tout le projet, et le risque de régression est limité.'
                        modification=''
                        modif_Explication="Mieux anticiper la structure des slices dès le départ. J'ai dû refactoriser après avoir constaté que certaines données se chevauchaient entre les deux."
                        />

                        <Project_card 
                        num='02'
                        title='Sophie Bluel - Portfolio dynamique & auth'
                        description="Transformation d'une galerie HTML statique en interface dynamique pilotée par API. Gestion complète de l'authentification, ajout et suppression d'éléments via formulaire, mise à jour de l'affichage sans rechargement de page."
                        competence1='JavaScript ES6+'
                        skill1_cat='dev'
                        competence2='API REST'
                        skill2_cat='dev'
                        competence3='Auth JWT'
                        skill3_cat='dev'
                        competence4='DOM dynamique'
                        skill4_cat='dev'
                        competence5='CRUD complet'
                        skill5_cat='neutre'
                        GitLink='https://github.com/NeugdaeUju/Projet_6-Sophie_Bluel'
                        DemoLink='#'
                        decision1='Deux div distinctes pour les modals'
                        decision1_text=" — Plutôt qu'une modal imbriquée dans une autre, deux conteneurs indépendants. Chacun a son cycle d'ouverture/fermeture propre, sans interférence."
                        decision2='Centralisation des appels API'
                        decision2_text=' — Tous les appels sont regroupés dans un seul fichier. Modifier un endpoint ne nécessite pas de chercher dans tout le projet, et le risque de régression est limité.'
                        modification='Migrer vers React ou Vue'
                        modif_Explication=" — En JS pur, la gestion du DOM devient vite fastidieuse à maintenir. Ce projet m'a convaincu de la valeur réelle des frameworks."
                        />
                    </div>
                </section></FadeIn>

                <FadeIn delay={240}><section id='experience' aria-label='Expérience'>
                    <div className='inner-section'>
                    <Section_title num='04' title='Expé' italic_title='-riences'/>
                        <Experience_card
                        company='TELEGRAFIK'
                        Expe_title='Stagiaire RH, Admin & Gestion'
                        desc_place='Entreprise de maintient à domicile des personnes âgées · Colomiers'
                        tag1='RH opérationnel'
                        tag2='Administration'
                        tag3='Gestion'
                        tag4='Polyvalance'
                        tag1_cat='rh'
                        tag2_cat='rh'
                        tag3_cat='rh'
                        tag4_cat='neutre'
                        date='Fév — Juil'
                        duration='6 mois · 2026'
                        missions1_title='Administration RH'
                        mission1='Gestion des arrêts de travail'
                        mission2='Suspension de contrats'
                        mission3='Liaison avec le cabinet RH externe'
                        mission4='Suivi administratif des salariés'
                        missions2_title='Recrutement & RH terrain'
                        mission5="Recrutement d'alternants et stagiaires"
                        mission6="Gestion des départs"
                        mission7="Rédaction des contrats"
                        missions3_title='Gestion & Admin générale'
                        mission8='Saisie de factures fournisseurs'
                        mission9='Envoie des factures aux clients'
                        mission10='Achat véhicule de société'
                        mission11='Migration facturation électronique'
                        retour="la polyvalence du poste m'a appris à jongler entre des urgences RH, des tâches administratives et des projets de fond — souvent en parallèle. C'est exactement ce que je cherche à retrouver dans un rôle hybride."
                        />
                    </div>
                </section></FadeIn>

                <FadeIn delay={300}><section id='contact' aria-label='Contact'>
                     <Contact />
                </section></FadeIn>
            </main>
        </>
    )
}

export default Accueil