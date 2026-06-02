import {useState} from 'react';
import '../assets/sass/project_card.scss';

function Project_card ({num, title, description, competence1, competence2, competence3, competence4, competence5, GitLink, DemoLink, decision1, decision2, decision1_text, decision2_text, modification, modif_Explication, modification2, modif2_Explication, skill1_cat, skill2_cat, skill3_cat, skill4_cat, skill5_cat}) {
const [showDetails, setShowDetails] = useState(false);
const handleClick = () => {
    setShowDetails(!showDetails);
};

    return (
        <div className='project_card fade-in visible' onClick={handleClick}>
            <div className='project_card_presentation'>
                <p className='project-num'>{num}</p>
                <div className='project-description'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className='project-skills'>
                        <p className={`skill ${skill1_cat}`} >{competence1}</p>
                        <p className={`skill ${skill2_cat}`}>{competence2}</p>
                        <p className={`skill ${skill3_cat}`}>{competence3}</p>
                        <p className={`skill ${skill4_cat}`}>{competence4}</p>
                        <p className={`skill ${skill5_cat}`}>{competence5}</p>
                    </div>
                </div>
                <div className='links'>
                    <a href={GitLink} className='link' target='_blank'>↗ GitHub</a>
                    <a href={DemoLink} className='link' target='_blank'>↗ Démo</a>
                    <p className='more'>{showDetails ? "Masquer ↑" : "Voir le détail ↓"}</p>
                </div>
            </div>


            {showDetails && (
            <div className='project_card_details'>
                <div className='decisions-techniques'>
                    <h4>Décisions techniques</h4>
                    <div className='decision'>
                        <span className='arrow'>→</span>
                        <span><strong>{decision1}</strong>{decision1_text}</span>
                    </div>
                    <div className='decision'>
                        <span>→</span>
                        <span><strong>{decision2}</strong>{decision2_text}</span>
                    </div>
                </div>
                <div className='revoir'>
                    <h4>Ce que je referais</h4>
                    <div className='decision'>
                        <span>!</span>
                        <span><strong>{modification}</strong>{modif_Explication}</span>
                    </div>
                    <div className='decision'>
                        <span>!</span>
                        <span><strong>{modification2}</strong>{modif2_Explication}</span>
                    </div>
                </div>
            </div>
            ) }
            
        </div>
    )
}

export default Project_card;