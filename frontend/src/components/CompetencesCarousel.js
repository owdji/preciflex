import React, { useState } from 'react'
import '../styles/CompetencesCarousel.css'

const CompetencesCarousel = ({competences}) => {
    const [current, setCurrent] = useState(0)

  return (
    <div>
        <div className='comptencesTitle'>
            {competences.map((competences, index) => (
                <p key={index} onClick={() => setCurrent(index)} className={current === index ? 'competenceTitleSelected' : ''}>{competences.competenceTitle}</p>
            ))}
        </div>
        <div className='competencesCarousel'>
            <div>
                <h3 className='h3 competencesCarouselTitle'>{competences[current].competenceTitle}</h3>
                <p className='p competencesCarouselDescription'>{competences[current].competenceDescription}</p>

                <p className='comptencesCarouselLink'>See more...</p>
            </div>

            <img src={`http://localhost:1337${competences[current].competenceImage.data.attributes.url}`} className='comptenceCarouselImage'/>
        </div>

    </div>

  )
}

export default CompetencesCarousel