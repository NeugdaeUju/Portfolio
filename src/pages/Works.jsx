import ProjectCard from '../components/ProjectCard'
import Api from '../assets/data/Api'
import '../assets/sass/works.scss'
import { useState , useEffect } from 'react'

function Works () {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        Api.getProjects()
            .then(data => setProjects(data))
            .catch(err => console.error('Erreur de chargement des projets : ', err))
    }, [])

    return (
        <>
            <main className='works-page'>
                <h1 className='works-page--title'>Works</h1>
                <div className='works-page__card-container'>
                {projects.map((p) => {
                    return (
                        <ProjectCard 
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            presentation={p.presentation}
                        />)
                })}
                </div>
            </main>
        </>
    )
}

export default Works