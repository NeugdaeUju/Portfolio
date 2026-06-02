import '../sass/section_title.scss';

function Section_title ({num, title, italic_title}) {
    return (
         <div className='section-title'>
            <p className='section-title-nb fade-in visible'>// {num}</p>
            <h2 className='section-title-header fade-in visible'>{title}<i>{italic_title}</i></h2>
        </div>
    )
}

export default Section_title;