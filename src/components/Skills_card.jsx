import '../assets/sass/skills_card.scss'

function Skills_card ({domaine_sk, domaine, skill1, skill2, skill3, skill4, skill5}) {
    return (
        <div className={`skills_card ${domaine_sk}`}>
            <h3 className={`${domaine_sk}`} >{domaine}</h3>
            <div className='tags'>
                <p className='tags-items'>{skill1}</p>
                <p className='tags-items'>{skill2}</p>
                <p className='tags-items'>{skill3}</p>
                <p className='tags-items'>{skill4}</p>
                <p className='tags-items'>{skill5}</p>
            </div>
        </div>
    )
}

export default Skills_card;