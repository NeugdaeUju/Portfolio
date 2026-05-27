import {useState} from 'react';
import '../assets/sass/project_card.scss';

function Project_card ({num, title, description, compétence1, compétence2, compétence3, compétence4}) {
const [showDetails, setShowDetails] = useState(false);
const handleClick = () => {
    setShowDetails(!showDetails);
};

    return (
        <div className='project_card fade-in visible' onClick={handleClick}>
            <div div className='project_card_presentation'>
                <p className='project-num'>{num}</p>
                <div className='project-description'>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className='project-skills'>
                        <p className='skill'>{compétence1}</p>
                        <p className='skill'>{compétence2}</p>
                        <p className='skill'>{compétence3}</p>
                        <p className='skill'>{compétence4}</p>
                    </div>
                </div>
                <div className='links'>
                    <a href="#" className='link' target='_blank'>GitHub</a>
                    <a href="#" className='link' target='_blank'>Démo</a>
                    <p className='more'>{showDetails ? "Masquer" : "Voir le détail"}</p>
                </div>
            </div>


            {showDetails && (
            <div className='project_card_details'>
                <div className='decisions-techniques'>
                    <h4>Décisions techniques</h4>
                    <div className='decision'>
                        <span className='arrow'>→</span>
                        <span><strong>La décision</strong> - Le text explicatif</span>
                    </div>
                    <div className='decision'>
                        <span>→</span>
                        <span><strong>La décision</strong> - Le text explicatif</span>
                    </div>
                </div>
                <div className='revoir'>
                    <h4>Ce que je referais</h4>
                    <div className='decision'>
                        <span>!</span>
                        <span><strong>La décision</strong> - Le text explicatif</span>
                    </div>
                </div>
            </div>
            ) }
            
        </div>
    )
}

export default Project_card;