import '../assets/sass/carousselDots.scss'

function CarousselDots ({length , currentIndex, onChange, className}) {
    if(length <= 1) return null
    return (
        <div className={`${className}_dots`}>
            {Array.from({length}).map((_, i) => (
                <button
                    key={i}
                    className={`${className}_dots__button${i === currentIndex ? '__active' : ''}`}
                    type="button"
                    aria-label={`Aller à l'image ${i + 1}`}
                    aria-current={i === currentIndex}
                    onClick={() => onChange(i)}/>
            ))}
        </div>
    )
}

export default CarousselDots