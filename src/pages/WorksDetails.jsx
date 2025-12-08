import { useParams } from "react-router-dom"
import data from '../assets/data/project.json'
import Header from '../components/Header'
import '../assets/sass/worksDetails.scss'

function WorksDetails () {
    const {id} = useParams();
    const project = data.find(project => project.id === id)

    return (
        <>
            <Header page={project.name}/>
            <div className='worksDetails-page'>
                <div className='worksDetails-page__description'>
                    <img className='worksDetails-page__description--image'/>
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
                        <p className='worksDetails-page__skills__list--item'>React</p>
                        <p className='worksDetails-page__skills__list--item'>HTML</p>
                        <p className='worksDetails-page__skills__list--item'>CSS</p>
                        <p className='worksDetails-page__skills__list--item'>Redux</p>
                        <p className='worksDetails-page__skills__list--item'>Doc Swagger</p>
                        <p className='worksDetails-page__skills__list--item'>API</p>
                        <p className='worksDetails-page__skills__list--item'>Git / GitHub</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorksDetails