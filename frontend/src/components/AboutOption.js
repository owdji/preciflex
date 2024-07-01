import React, { useState } from 'react'
import '../styles/Contact.css'

const AboutOption = ({title, sendSelectedAbout}) => {
    const [selected, setSelected] = useState(false)

    const handleSelectedAbout = () => {
        sendSelectedAbout(title)
        setSelected(!selected)
    }

  return (
    <div className={selected ? 'col-span-1 bg-electric-blue text-white aboutOption' : 'col-span-1 aboutOption'} onClick={handleSelectedAbout}>
        <p className='title4'>{title}</p>
    </div>
)
}

export default AboutOption