import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import project from '../assets/data/project.json'
import '../assets/sass/works.scss'

function Works () {
    return (
        <>
            <Header 
                page='Works'/>
            <div className='works-page'>
                {project.map((p , i) => {
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
        </>
    )
}

export default Works