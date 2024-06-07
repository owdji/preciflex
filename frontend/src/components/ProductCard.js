import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/ProductCard.css'

const ProductCard = ({id, title, industry, services, competences, imageUrl}) => {

    // const urlTitle = title.toLowerCase().replace(/\s+/g, '-');

  return (
    // <Link className='productCard' to={{ pathname: `/luxury/${urlTitle}`, state: { realId: id }}}>
    <Link className='productCard' to={`/luxury/${id}`}>
        <div className='topProductCard'>
            <div>
                <h2 className='bold1'>{title.toUpperCase()}</h2>
                <p className='p2'>ind. {industry}</p>
            </div>

            <div className='p2 productCardServices'>
                {services.map((service) => (
                    <p key={service}>{service}</p>
                ))}
            </div>
        </div>


        <img src={`http://localhost:1337${imageUrl}`}/>

        <p className='p2'>{competences.join(', ')}</p> {/* All competences in the same p separated by a comma */}

    </Link>
  )
}

export default ProductCard