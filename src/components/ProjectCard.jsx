import { Link } from 'react-router-dom'
import project from '../assets/data/project.json'

function ProjectCard ({id , index, name}) {
    const cardClass = `works-page__card-${index}`

    return (
        <>
            <Link to={`/works/${id}`} className={cardClass}>
                <figure>
                    <img/>
                    <figcaption>{name}</figcaption>
                </figure>
            </Link>
        </>
    )
}

export default ProjectCard