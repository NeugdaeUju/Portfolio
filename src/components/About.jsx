import '../sass/about.scss';

function About () {
    return(
        <div className='about-content fade-in visible'>
            <p className='about-content-text'>Polyvalente par choix, rigoureuse par nature. J'ai construit un profil hybride rare : une base technique solide en développeemnt frontend et une expérience concrète côté RH et administration d'entreprise.</p>
            <p className='about-content-text'>Ce qui me différencie. Je comprends les <strong>processus internes</strong> avant de coder. Quand je développe un outil de gestion, je ne traduis pas un cahier des charges — je modélise une réalité que j'ai vécue.</p>
            <div className='about-content-block'>
                <div className='about-content-block-side side-dev'>
                    <p className='about-content-block-side-title dev'>Côté Dev</p>
                    <div className='about-content-block-side-list'>
                        <div className='about-content-block-side-list item'><em>→ </em>Interfaces React & Vue</div>
                            <div className='about-content-block-side-list item'><em>→ </em>TypeScript & état global</div>
                            <div className='about-content-block-side-list item'><em>→ </em>API REST, mocking</div>
                            <div className='about-content-block-side-list item'><em>→ </em>Backend en apprentissage</div>
                        </div>
                    </div>
                    <div className='about-content-block-side side-rh'>
                        <p className='about-content-block-side-title rh'>Côté RH</p>
                        <div className='about-content-block-side-list'>
                            <div className='about-content-block-side-list item'><em>→ </em>Stage 6 mois opérationnel</div>
                            <div className='about-content-block-side-list item'><em>→ </em>Admin & gestion d'entreprise</div>
                            <div className='about-content-block-side-list item'><em>→ </em>Process de recrutement</div>
                            <div className='about-content-block-side-list item'><em>→ </em>Outils de suivi interne</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;