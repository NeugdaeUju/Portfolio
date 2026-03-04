import { useParams, Link } from "react-router-dom"
import { useState , useEffect } from 'react'
import Api from '../assets/data/Api'
import '../assets/sass/worksDetails.scss'
import ErrorPage from './ErrorPage'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function WorksDetails () {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] =useState(null)

    // We'll compute previous/next after we know which project is current.
    // Using string IDs from JSON so convert to number and rely on array indices
    // for proper wrap-around behavior.
    // (initial values kept for linter; will be replaced later)
    let projectPrevious = null;
    let projectNext = null;

    useEffect(() => {
        Api.getProjects()
            .then(data => setProjects(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Chargement ...</p>
    if(error) return <p>Erreur de chargement des projets.</p>
 
    const numericId = parseInt(id, 10);
    const project = projects.find(p => parseInt(p.id, 10) === numericId);
    
    if(!project) {
        return (
            <ErrorPage />
        )
    }

    // calc prev/next using position in array so navigation wraps correctly
    const currentIndex = projects.findIndex(p => parseInt(p.id, 10) === numericId);
    if (currentIndex !== -1) {
        const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
        const nextIndex = (currentIndex + 1) % projects.length;
        projectPrevious = projects[prevIndex];
        projectNext = projects[nextIndex];
    }

    const coverURL = project.cover ? new URL(`../assets/images/${project.cover}` , import.meta.url).href : null

    return (
        <>
            <main className='worksDetails-page'>
                <section className='worksDetails-page__description'>
                    <div>
                        <h1>{project.name}</h1>
                        <h2 className='read-only' hidden="true">Presentation</h2>
                        <p>{project.description}</p>
                    </div>
                    {coverURL && (
                        <img className='worksDetails-page__description--image'
                         src={coverURL}
                         alt={project.name}/>
                    )}
                </section>

                <section className='worksDetails-page__analyse'>
                    <h2>Analyse</h2>
                    <p>{project.analyse}</p>
                </section>

                <section className='worksDetails-page__improvement'>
                    <h2>Action d'amélioration</h2>
                    <p>{project.improvement}</p>
                    <ul>
                        {project.improvementPoints.map((point, index) => (
                            <li key={index}>{point}</li>
                        ))}
                    </ul>
                </section>

                <section className='worksDetails-page__process' id='process'>
                    <h2>Processus</h2>
                    <p>Vidéos d'explication du process en cours ...</p>
                    <p>Vous ne pouvez pas lire la vidéo ? Retrouver l'explication écrite <em>ici</em></p>
                </section>
                
                <section className='worksDetails-page__before-after'>
                    <h2>Avant - Après</h2>
                    <img src=''></img>
                    <img src=''></img>
                </section>

                <section className='worksDetails-page__navigation'>
                    <Link to={`/works/${projectPrevious?.id}`} className='worksDetails-page__navigation__link' ><FaChevronLeft className='worksDetails-page__navigation__icon'/>Projet {projectPrevious?.id}</Link>
                    <Link to={`/works/${projectNext?.id}`} className='worksDetails-page__navigation__link'>Projet {projectNext?.id}  <FaChevronRight className='worksDetails-page__navigation__icon'/></Link>
                </section>
            </main>
        </>
    )
}

export default WorksDetails