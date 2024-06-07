import React from 'react'
import useFetch from '../hooks/useFetch'
import ProductCard from '../components/ProductCard'
import '../styles/Homepage.css'

const Homepage = () => {
  const { data, error, loading } = useFetch('http://localhost:1337/api/realizations?populate=*')
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  console.log(data)
  return (
    <div>
      <h2 className="h2">Realization</h2>

      <div className="productCards">
      {data.map((product) => (
        <ProductCard key={product.id} id={product.id} title={product.attributes.title} industry={product.attributes.industry} services={product.attributes.services} competences={product.attributes.competences} imageUrl={product.attributes.productImage.data.attributes.url}/>
      ))}
      </div>

    </div>
  )
}

export default Homepage