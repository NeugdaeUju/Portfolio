import '../sass/hero_right.scss';

function Hero_right () {
    return (
        <div className='hero-visual'>
                        <p className="monogram">LP</p>
                        <div className='hero-visual-content'>
                            <div className='hero-visual-content-grid'>
                                <div className='block block-1'>
                                    <span>01</span>
                                    <p className='profile'>Profil</p>
                                    <p className='text'>La rigueur du code,<br/> la vision du terrain.</p>
                                </div>
                                <div className='block block-2'>
                                    <span>6</span>
                                    <p>Mois en RH</p>
                                </div>
                                <div className='block block-3'>
                                    <span>5+</span>
                                    <p>Projets web</p>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Hero_right