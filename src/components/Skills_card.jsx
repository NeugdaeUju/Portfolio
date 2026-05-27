import '../assets/sass/skills_card.scss'

function Skills_card ({domaine_sk, domaine, skill1, skill2, skill3, skill4, skill5}) {
    return (
        <div className={`skills_card ${domaine_sk}`}>
            <h2 className={`${domaine_sk}`} >{domaine}</h2>
            <div>
                <p>{skill1}</p>
                <p>{skill2}</p>
                <p>{skill3}</p>
                <p>{skill4}</p>
                <p>{skill5}</p>
            </div>
        </div>
    )
}

export default Skills_card;