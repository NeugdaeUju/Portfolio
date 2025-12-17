import Header from '../components/Header'
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
            <Header 
                page='Works'/>
            <main className='works-page'>
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
            </main>
        </>
    )
}

export default Works