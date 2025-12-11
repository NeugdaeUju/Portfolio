import { useParams, Link } from "react-router-dom"
import data from '../assets/data/project.json'
import Header from '../components/Header'
import ProcessSteps from "../components/ProcessSteps"
import '../assets/sass/worksDetails.scss'
import github from '../assets/images/github-logo.png'
import site from '../assets/images/site.png'

function WorksDetails () {
    const {id} = useParams();
    const project = data.find(project => project.id === id)

    return (
        <>
            <Header page={project.name}/>
            <div className='worksDetails-page'>
                <div className='worksDetails-page__description'>
                    <img className='worksDetails-page__description--image'/>
                    <div className='worksDetails-page__description__presentation'>
                        <div className='worksDetails-page__description__presentation__header'>
                            <h3 className='worksDetails-page__description__presentation__header--subtitles'>Description : </h3>
                            <Link to={project.links} className='worksDetails-page__description__presentation__header__link--background'>
                                <img src={github} className='worksDetails-page__description__presentation__header__link--image'/>
                            </Link>
                            <Link to={project.links}  className='worksDetails-page__description__presentation__header__link--background'>
                                <img src={site} className='worksDetails-page__description__presentation__header__link--image'/>
                            </Link>
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
                    <ProcessSteps
                        step="X"
                        image=""
                        text="lorem ipsum"/>

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