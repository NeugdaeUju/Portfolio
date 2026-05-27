import '../assets/sass/contact.scss';


function Contact () {
    return (
        <>
        <div className='bg'>
            <p>LP</p>
        </div>
        <div className='content'>
            <div>
                <p className='label'>Disponible Remote</p>
                <h2 className='heading'>Travaillon <br/> <i>ensemble</i></h2>
                <p className='sub'>Je recherche une équipe qui avance, qui scale, et qui valorise un profil capable de coder et de comprendre les enjeux humains derrière le produit.</p>
            </div>
            <div className='action'>
                <a className='CV button' href='mailto:email@exemple.com'>Envoyer un mail</a>
                <a className='link button' href='#'>Télécharger mon CV</a>
                <a className='link button' href='https://www.linkedin.com/in/le%C3%AFla-pelletier-672572249/' target='_blank'>Linkedin</a>
            </div>
        </div>
        </>
    )
}

export default Contact