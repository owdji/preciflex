import React from 'react'
import ProductCard from '../components/ProductCard'
import { useQuery, gql } from '@apollo/client'
import '../styles/Homepage.css'

const HOMPAGE = gql`
query getHomePage {
  homePage {
    data {
      attributes {
        slogan
        companyDescription

        luxuryImage {
          data {
            attributes {
              formats
            }
          }
        }

        medtechImage {
          data {
            attributes {
              formats
            }
          }
        }

        realizations {
          data {
            id
            attributes {
              title
              industry
              services
              competences
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
    }
  }
}

`

const Homepage = () => {
  const { data, error, loading } = useQuery(HOMPAGE)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const realizations = data.homePage.data.attributes.realizations.data

  console.log(realizations)
  console.log(realizations[0].attributes.title)

  realizations.map((product) => {
    console.log(product.attributes.title)
  }
  )

  return (
    <div>
      <h2 className="h2">Realizations</h2>

      <div className="productCards">

      {realizations.map((product) => (
        <ProductCard key={product.id} id={product.id} title={product.attributes.title} industry={product.attributes.industry} services={product.attributes.services} competences={product.attributes.competences} imageUrl={product.attributes.productImage.data.attributes.url}/>
      ))}

      </div>

    </div>
  )
}

export default Homepage

// ------------------------------------------------------------
// import React from 'react'
// import useFetch from '../hooks/useFetch'
// import ProductCard from '../components/ProductCard'
// import '../styles/Homepage.css'

// const Homepage = () => {
//   const { data, error, loading } = useFetch('http://localhost:1337/api/realizations?populate=*')
//   if (loading) return <div>Loading...</div>
//   if (error) return <div>Error: {error.message}</div>

//   console.log(data)
//   return (
//     <div>
//       <h2 className="h2">Realizations</h2>

//       <div className="productCards">
//       {data.map((product) => (
//         <ProductCard key={product.id} id={product.id} title={product.attributes.title} industry={product.attributes.industry} services={product.attributes.services} competences={product.attributes.competences} imageUrl={product.attributes.productImage.data.attributes.url}/>
//       ))}
//       </div>

//     </div>
//   )
// }

// export default Homepage