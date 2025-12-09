import { useParams } from "react-router-dom"
import data from '../assets/data/project.json'
import Header from '../components/Header'
import '../assets/sass/worksDetails.scss'
import ErrorPage from './ErrorPage'
 
function WorksDetails () {
    const {id} = useParams();
    const project = data.find(project => project.id === id)

    if(!project) {
        return (
            <ErrorPage />
        )
    }

    return (
        <>
            <Header page={project.name}/>
            <div className='worksDetails-page'>
                <div className='worksDetails-page__description'>
                    <img className='worksDetails-page__description--image'
                         src={new URL(`../assets/images/${project.cover}`, import.meta.url).href}/>
                    <div className='worksDetails-page__description__texts'>
                        <h2 className='worksDetails-page__description__texts--title worksDetails-page__subtitles'>
                            Projet : {project.name}
                        </h2>
                        <h3 className='worksDetails-page__description__texts--subtitles'>Description : </h3>
                        <p className='worksDetails-page__description__texts--text'>Lorem ipsum</p>
                    </div>

                </div>
                <div className='worksDetails-page__process'>
                    <h2 className='worksDetails-page__process--title  worksDetails-page__subtitles'>
                        Process :
                    </h2>
                    <img className='worksDetails-page__process--image'/>

                </div>
                <div className='worksDetails-page__skills'>
                    <h2 className='worksDetails-page__skills--title  worksDetails-page__subtitles'>Skills</h2>
                    <div className='worksDetails-page__skills__list'>
                        {Array.isArray(project.skills) &&
                            project.skills.map((skill, idx) => (
                                <p className='worksDetails-page__skills__list--item'
                                    key={idx}>{skill}</p>
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorksDetails