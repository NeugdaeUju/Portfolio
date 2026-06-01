import '../assets/sass/experience_card.scss'

function Experience_card () {
    return(
        <div className='expe_card fade-in visible'>
            <div className='top'>
                <div>
                    <p className='company'>Telegrafik</p>
                    <h3>Stagiaire RH, Admin & Gestion</h3>
                    <p className='company-desc'>Entreprise technologique de maintient à domicile . Colomiers</p>
                    <div className='tags'>
                        <span className='tag rh'>RH opérationnel</span>
                        <span className='tag rh'>Administration</span>
                        <span className='tag rh'>Gestion</span>
                        <span className='tag neutre'>Full remote partiel</span>
                    </div>
                </div>
                <div className='duration'>
                    <p className='date'>Fév - Juil</p>
                    <p className='dur'> 6 mois 2026</p>
                    <span>↗ Promesse CDD à l'issue</span>
                </div>
            </div>
            <div className='missions'>
                <div className='missions_block'>
                    <h4>Administration RH</h4>
                    <div className='missions-list'>
                        <span className='item'><em>— </em>Gestion des arrêts de travail</span>
                    </div>
                </div>
                <div className='missions_block'>
                    <h4>Administration RH</h4>
                    <div className='missions-list'>
                        <span className='item'><em>— </em>Gestion des arrêts de travail</span>
                    </div>
                </div>
                <div className='missions_block'>
                    <h4>Administration RH</h4>
                    <div className='missions-list'>
                        <span className='item'><em>— </em>Gestion des arrêts de travail</span>
                    </div>
                </div>
            </div>
            <div className='takeaway'>
                <span>→</span>
                <p><strong>Ce que j'en retiens : </strong>la polyvalence du poste m'a appris à jongler entre des urgences RH, des tâches administratives et des projets de fond — souvent en parallèle. C'est exactement ce que je cherche à retrouver dans un rôle hybride.</p>
            </div>
        </div>
    )
}

export default Experience_card;