import '../assets/sass/section_title.scss';

function Section_title ({num, title,sec_title, italic_title, point}) {
    return (
         <div className='section-title'>
            <p className='section-title-nb fade-in visible'>// {num}</p>
            <h2 className='section-title-header fade-in visible'>{title} <br/> {sec_title}<i>{italic_title}</i>{point}</h2>
        </div>
    )
}

export default Section_title;