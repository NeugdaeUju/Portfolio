import { Link } from 'react-router-dom'
import '../assets/sass/projectCard.scss'

function ProjectCard ({id , index, name}) {
    const cardClass = `works-page__card-${index}`

    return (
        <>
            <Link to={`/works/${id}`} className={cardClass}>
                <figure className='works-page__card'>
                    <img className='works-page__card--image'/>
                    <figcaption className='works-page__card--name'>{name}</figcaption>
                </figure>
            </Link>
        </>
    )
}

export default ProjectCard