import '../assets/sass/hero_left.scss';

function Hero_left () {
    return (
        <div className='hero-prez'>
            <p className='hero-prez-text'>Disponible · Full Remote</p>
            <h1 className='hero-prez-title'>Développeuse <br/> <em>frontend</em><br/> & RH</h1>
            <p className='hero-prez-description'>Je construit des <strong>interfaces qui résolvent de vrais problèmes métier</strong> - avec une compréhension opérationnelle des enjeux humains et organisationnels que peu de devs ont.</p>
            <div className='hero-prez-tags'>
                <span className='hero-prez-tags-badge badge-dev'>React Vue</span>
                <span className='hero-prez-tags-badge badge-dev'>TypeScript</span>
                <span className='hero-prez-tags-badge badge-rh'>RH & Admin</span>
                <span className='hero-prez-tags-badge badge-rh'>Recrutement</span>
                <span className='hero-prez-tags-badge badge-neutre'>Full remote</span>
            </div>
            <div className='hero-prez-links'>
                <a href='#projects' className='hero-prez-links-button project'>Voir mes projets</a>
                <a href='#contact' className='hero-prez-links-button contact'>Me contacter</a>
            </div>
        </div>
    )
}

export default Hero_left

