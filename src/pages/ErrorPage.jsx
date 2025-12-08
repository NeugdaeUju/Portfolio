import { Link } from 'react-router-dom'
import '../assets/sass/errorPage.scss'

function ErrorPage () {
    return (
        <>
        <div className='error-page'>
            <h1 className='error-page__title'>Erreur 404</h1>
            <p className='error-page__text'>La page que vous avez demandé n'existe pas ou plus</p>
            <Link to='/' className='error-page__link'>Cliquez ici pour retourner à la page d'accueil</Link>
        </div>
        </>
    )
 }

 export default ErrorPage