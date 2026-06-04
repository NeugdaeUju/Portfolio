import '../assets/sass/contact.scss';


function Contact () {
    return (
        <>
        <div className='bg'>
            <p>LP</p>
        </div>
        <div className='content'>
            <div>
                <p className='label'>Disponible · Full Remote</p>
                <h2 className='heading'>Travaillons <br/> <i>ensemble</i></h2>
                <p className='sub'>Je recherche une équipe qui avance, qui scale, et qui valorise un profil capable de coder et de comprendre les enjeux humains derrière le produit.</p>
            </div>
            <div className='action'>
                <a className='CV button' href='mailto:leila.plltr@gmail.com'>Envoyer un mail</a>
                <a className='link button' href='https://www.linkedin.com/in/le%C3%AFla-pelletier-672572249/' target='_blank'>Linkedin</a>
                <a className='link button' href='../../public/documents/CV_Leila_Pelletier.pdf' download>Télécharger le CV</a>
            </div>
        </div>
        </>
    )
}

export default Contact