import '../assets/sass/experience_card.scss'

function Experience_card ({company, Expe_title, desc_place, tag1, tag2, tag3, tag4, tag1_cat, tag2_cat, tag3_cat, tag4_cat, date, duration, missions1_title, mission1, missions2_title, mission2, missions3_title, mission3, mission4, mission5, mission6, mission7, mission8, mission9, mission10, mission11, mission12, retour, promesse, tiret1, tiret2, tiret3, tiret4, tiret5, tiret6, tiret7, tiret8, tiret9, tiret10, tiret11, tiret12}) {
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
                    <span>{promesse}</span>
                </div>
            </div>
            <div className='missions'>
                <div className='missions_block'>
                    <h4>{missions1_title}</h4>
                    <div className='missions-list'>
                        <span className='item'><em>{tiret1}</em>{mission1}</span>
                        <span className='item'><em>{tiret2}</em>{mission2}</span>
                        <span className='item'><em>{tiret3}</em>{mission3}</span>
                        <span className='item'><em>{tiret4}</em>{mission4}</span>
                    </div>
                </div>
                <div className='missions_block'>
                    <h4>{missions2_title}</h4>
                    <div className='missions-list'>
                        <span className='item'><em>{tiret5}</em>{mission5}</span>
                        <span className='item'><em>{tiret6}</em>{mission6}</span>
                        <span className='item'><em>{tiret7}</em>{mission7}</span>
                        <span className='item'><em>{tiret8}</em>{mission8}</span>
                    </div>
                </div>
                <div className='missions_block'>
                    <h4>{missions3_title}</h4>
                    <div className='missions-list'>
                        <span className='item'><em>{tiret9}</em>{mission9}</span>
                        <span className='item'><em>{tiret10}</em>{mission10}</span>
                        <span className='item'><em>{tiret11}</em>{mission11}</span>
                        <span className='item'><em>{tiret12}</em>{mission12}</span>
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