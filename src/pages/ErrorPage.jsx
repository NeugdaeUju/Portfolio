import { Link } from 'react-router-dom'

function ErrorPage () {
    return (
        <>
        <div>
            <h1>Erreur 404</h1>
            <p>La page que vous avez demandé n'existe pas ou plus</p>
            <Link to='/'>Cliquez ici pour retourner à la page d'accueil</Link>
        </div>
        </>
    )
 }

 export default ErrorPage