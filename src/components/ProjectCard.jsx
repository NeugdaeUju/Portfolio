import { Link } from 'react-router-dom'
import '../assets/sass/projectCard.scss'

function ProjectCard ({id, name, presentation}) {

    return (
        <>
            <Link to={`/works/${id}`} className="works-page__card">
                <h2 className="works-page__card--title">{name}</h2>
                <p className="works-page__card--description">{presentation}</p>
            </Link>
            <div className="works-page__card--seperateur"></div>
        </>
    )
}

export default ProjectCard