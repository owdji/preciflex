import React, { useState } from 'react'
import '../styles/CompetencesCarousel.css'

const CompetencesCarousel = ({competences}) => {
    const [current, setCurrent] = useState(0)

  return (
    <div className='col-span-6 grid grid-cols-6'>
        <div className='comptencesTitle col-span-6'>
            {competences.map((competences, index) => (
                <p key={index} onClick={() => setCurrent(index)} className={current === index ? 'pBoldBlue' : 'p'}>{competences.competenceTitle}</p>
            ))}
        </div>
        <div className='col-span-6'>
            <div className='col-span-6 grid grid-cols-6 carouselbox'>
                <div className='col-span-3'>
                    <h3 className='col-span-3 title2 carouselTitle'>{competences[current].competenceTitle}</h3>
                    <div className='col-span-3 carouselDescription'>
                        <p className='p'>{competences[current].competenceDescription}</p>
                        <p className='pLink'>See more...</p>
                    </div>
                </div>

                <img src={`http://localhost:1337${competences[current].competenceImage.data.attributes.url}`} className='col-span-3 comptenceCarouselImage'/>

  
            </div>

        </div>

    </div>

  )
}

export default CompetencesCarousel