import { useParams } from "react-router-dom"
import data from '../assets/data/project.json'
import Header from '../components/Header'

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
                        <h2 className='worksDetails-page__description__texts--title'>
                            Projet : {project.name}
                        </h2>
                        <p className='worksDetails-page__description__texts--subtitles'>Description : </p>
                        <p className='worksDetails-page__description__texts--text'>Lorem ipsum</p>
                    </div>

                </div>
                <div className='worksDetails-page__process'>
                    <h2 className='worksDetails-page__process--title'>
                        Process :
                    </h2>
                    <img className='worksDetails-page__process--image'/>

                </div>
                <div className='worksDetails-page__skills'>
                    <h2 className='worksDetails-page__skills--title'>Skills</h2>
                    <div className='worksDetails-page__skills__list'>
                        <p className='worksDetails-page__skills__list--item'>1</p>
                        <p className='worksDetails-page__skills__list--item'>2</p>
                        <p className='worksDetails-page__skills__list--item'>3</p>
                        <p className='worksDetails-page__skills__list--item'>4</p>
                        <p className='worksDetails-page__skills__list--item'>5</p>
                        <p className='worksDetails-page__skills__list--item'>6</p>
                        <p className='worksDetails-page__skills__list--item'>7</p>
                        <p className='worksDetails-page__skills__list--item'>8</p>
                        <p className='worksDetails-page__skills__list--item'>9</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default WorksDetails