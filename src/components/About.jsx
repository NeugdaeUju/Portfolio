import '../assets/sass/about.scss';

function About () {
    return(
        <div className='about-content fade-in visible'>
            <p className='about-content-text'>Polyvalente par choix, rigoureuse par nature. J'ai construit un profil hybride rare : une base technique solide en développeemnt frontend et une expérience concrète côté RH et administration d'entreprise.</p>
            <p className='about-content-text'>Ce qui me différencie. Je comprends les <strong>processus internes</strong> avant de coder. Quand je développe un outil de gestion, je ne traduis pas un cahier des charges — je modélise une réalité que j'ai vécue.</p>
            <div className='about-content-block'>
                <div className='about-content-block-side side-dev'>
                    <h3 className='about-content-block-side-title dev'>Côté Dev</h3>
                    <div className='about-content-block-side-list'>
                        <div className='about-content-block-side-list item'>Interfaces React & Vue</div>
                            <div className='about-content-block-side-list item'>TypeScript & état global</div>
                            <div className='about-content-block-side-list item'>API REST, mocking</div>
                            <div className='about-content-block-side-list item'>Backend en apprentissage</div>
                        </div>
                    </div>
                    <div className='about-content-block-side side-rh'>
                        <h3 className='about-content-block-side-title rh'>Côté RH</h3>
                        <div className='about-content-block-side-list'>
                            <div className='about-content-block-side-list item'>Stage 6 mois opérationnel</div>
                            <div className='about-content-block-side-list item'>Admin & gestion d'entreprise</div>
                            <div className='about-content-block-side-list item'>Process de recrutement</div>
                            <div className='about-content-block-side-list item'>Outils de suivi interne</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default About;