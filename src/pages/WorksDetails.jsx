import { useParams, Link } from "react-router-dom"
import { useState , useEffect } from 'react'
import Api from '../assets/data/Api'
import Header from '../components/Header'
import ProcessSteps from "../components/ProcessSteps"
import '../assets/sass/worksDetails.scss'
import ErrorPage from './ErrorPage'

function WorksDetails () {
    const { id } = useParams();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)
    const [error, setError] =useState(null)

    useEffect(() => {
        Api.getProjects()
            .then(data => setProjects(data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Chargement ...</p>
    if(error) return <p>Erreur de chargement des projets.</p>
 
    const project = projects.find(p => p.id === id)
    
    if(!project) {
        return (
            <ErrorPage />
        )
    }

    const images = Array.isArray(project.images) ? project.images.filter(Boolean) : []
    const coverURL = project.cover ? new URL(`../assets/images/${project.cover}` , import.meta.url).href : null

    return (
        <>
            <Header page={project.name}/>
            <div className='worksDetails-page'>
                <div className='worksDetails-page__description'>
                    {coverURL && (
                        <img className='worksDetails-page__description--image'
                         src={coverURL}
                         alt={project.name}/>
                    )}
                    <div className='worksDetails-page__description__presentation'>
                        <div className='worksDetails-page__description__presentation__header'>
                            <h3 className='worksDetails-page__description__presentation__header--subtitles'>Description : </h3>
                            {Array.isArray(project.links) && project.links.map((link, idx) => {
                                const href = link?.content ?? ''
                                const imgSrc = link?.img ?? ''
                                if (!href || !imgSrc) return null

                                return (
                                    <a key={idx}
                                       href={href}
                                       className='worksDetails-page__description__presentation__header__link--background'
                                       target='_blank'
                                       rel='noopener noreferrer'>
                                        <img src={new URL(`../assets/images/${imgSrc}` , import.meta.url).href}
                                             className='worksDetails-page__description__presentation__header__link--image'
                                             alt={link.caption ?? link.type ?? 'lien'}/>
                                    </a>
                                )
                            })}
                        </div>
                        <div className='worksDetails-page__description__presentation__text'>
                            <p className='worksDetails-page__description__presentation__text--text'>{project.description}</p>
                        </div>
                    </div>                    

                </div>
                <div className='worksDetails-page__process'>
                    <h2 className='worksDetails-page__process--title  worksDetails-page__subtitles'>
                        Process
                    </h2>
                    {Array.isArray(project.steps) && project.steps.length > 0 ? (
                        project.steps.map((s, i) => (
                            <ProcessSteps 
                                key={i}
                                step={s.title ?? `Etape ${i+1}`}
                                elements={s.elements}/>
                        ))
                    ) : (
                        <p>Aucune étape renseignée.</p>
                    )}

                    {images.length > 0 && (
                        <div className='works-page__images'>
                            {images.map((img, idx) => (
                                <img 
                                    key={ idx }
                                    className='worksDetails-page__process--image'
                                    src={new URL(`../assets/images/${img}` , import.meta.url).href}
                                    alt={`${project.name} ${idx + 1}`}/>
                            ))}
                        </div>
                    )}


                </div>
                <div className='worksDetails-page__skills'>
                    <h2 className='worksDetails-page__skills--title  worksDetails-page__subtitles'>Skills</h2>
                    <div className='worksDetails-page__skills__list'>
                        {Array.isArray(project.skills) && project.skills.length > 0 ? (
                            project.skills.map((skill, idx) => (
                                <p key={idx}
                                    className='worksDetails-page__skills__list--item'>{skill}</p>
                            ))
                        ) : (
                            <p className='worksDetails-page__skills__list--item'>Aucune compétences renseignée</p>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorksDetails