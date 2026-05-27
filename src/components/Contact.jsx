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
                <a className='CV button' mailto='email@exemple.com'>Envoyer un mail</a>
                <a className='link button'>Télécharger mon CV</a>
                <a className='link button'>Linkedin</a>
            </div>
        </div>
        </>
    )
}

export default Contact