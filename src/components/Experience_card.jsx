import '../assets/sass/experience_card.scss'

function Experience_card ({company, Expe_title, desc_place, tag1, tag2, tag3, tag4, tag1_cat, tag2_cat, tag3_cat, tag4_cat, date, duration, missions1_title, mission1, missions2_title, mission2, missions3_title, mission3, mission4, mission5, mission6, mission7, mission8, mission9, mission10, mission11, retour}) {
    return(
        <div className='expe_card fade-in visible'>
            <div className='top'>
                <div>
                    <p className='company'>{company}</p>
                    <h3>{Expe_title}</h3>
                    <p className='company-desc'>{desc_place}</p>
                    <div className='tags'>
                        <span className={`tag ${tag1_cat}`}>{tag1}</span>
                        <span className={`tag ${tag2_cat}`}>{tag2}</span>
                        <span className={`tag ${tag3_cat}`}>{tag3}</span>
                        <span className={`tag ${tag4_cat}`}>{tag4}</span>
                    </div>
                </div>
                <div className='duration'>
                    <p className='date'>{date}</p>
                    <p className='dur'>{duration}</p>
                    <span>↗ Promesse CDD à l'issue</span>
                </div>
            </div>
            <div className='missions'>
                <div className='missions_block'>
                    <h4>{missions1_title}</h4>
                    <div className='missions-list'>
                        <span className='item'><em>— </em>{mission1}</span>
                        <span className='item'><em>— </em>{mission2}</span>
                        <span className='item'><em>— </em>{mission3}</span>
                        <span className='item'><em>— </em>{mission4}</span>
                    </div>
                </div>
                <div className='missions_block'>
                    <h4>{missions2_title}</h4>
                    <div className='missions-list'>
                        <span className='item'><em>— </em>{mission5}</span>
                        <span className='item'><em>— </em>{mission6}</span>
                        <span className='item'><em>— </em>{mission7}</span>
                    </div>
                </div>
                <div className='missions_block'>
                    <h4>{missions3_title}</h4>
                    <div className='missions-list'>
                        <span className='item'><em>— </em>{mission8}</span>
                        <span className='item'><em>— </em>{mission9}</span>
                        <span className='item'><em>— </em>{mission10}</span>
                        <span className='item'><em>— </em>{mission11}</span>
                    </div>
                </div>
            </div>
            <div className='takeaway'>
                <span>→</span>
                <p><strong>Ce que j'en retiens : </strong>{retour}</p>
            </div>
        </div>
    )
}

export default Experience_card;