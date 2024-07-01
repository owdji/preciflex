import React from 'react'
import '../styles/ServiceCard.css'

const ServiceCard = ({title, description, icon, illustration}) => {
  return (
    <div className='col-span-1 serviceCard'>
        <img src={`http://localhost:1337${icon}`} className='w-[70px]'/>

        <div>
          <h3 className='title2'>{title}</h3>
          <p className='p'>{description}</p>
        </div>
    </div>
  )
}

export default ServiceCard