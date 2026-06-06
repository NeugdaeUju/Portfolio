import useInView from '../hooks/UseInVIew';

function FadeIn({children, className='', delay=0}) {
    const [ref, isVisible] = useInView();

    return (
        <div 
        ref={ref} 
        className={`fade-in ${isVisible ? 'visible' : ''} ${className}`}
        style={{transitionDelay: `${delay}ms`}}>

            {children}
        </div>
    )
}

export default FadeIn;