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
                {projects.map((p , i) => {
                    const index = i + 1
                    return (
                        <ProjectCard 
                            key={p.id}
                            id={p.id}
                            index={index}
                            name={p.name}
                            image={new URL(`../assets/images/${p.cover}` , import.meta.url).href}
                        />)
                })}
                </div>
            </main>
        </>
    )
}

export default Works