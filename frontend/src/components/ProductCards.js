import { gql, useQuery } from '@apollo/client'
import React from 'react'
import ProductCard from './ProductCard'

const REALIZATION = gql`
# Write your query or mutation here
query getRealization {
  realizations {
    data {
      id
      attributes {
        title
        industry
        competences
        services
        productImage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
}
`

const ProductCards = () => {
    const {data, error, loading} = useQuery(REALIZATION)

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
    const realizations = data.realizations.data

  return (
    <div className='w-full flex overflow-x-auto hideScrollBar space-around'>
        {realizations.map((product) => (
            <div className='flex-shrink-0 w-[300px]' key={product.id}>
                <ProductCard key={product.id} id={product.id} title={product.attributes.title} industry={product.attributes.industry} services={product.attributes.services} competences={product.attributes.competences} imageUrl={product.attributes.productImage.data.attributes.url}/>
            </div>
        ))}
    </div>
  )
}

export default ProductCards