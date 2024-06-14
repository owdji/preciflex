import React from 'react'
import ProductCard from '../components/ProductCard'
import { useQuery, gql } from '@apollo/client'
import '../styles/Homepage.css'
import ContactUsButton from '../components/ContactUsButton'
import CompetencesCarousel from '../components/CompetencesCarousel'
import ContactSection from '../components/ContactSection'

const HOMPAGE = gql`
query getHomePage {
  homePage {
    data {
      attributes {
        companyDescription

        luxuryImage {
          data {
            attributes {
              url
            }
          }
        }

        medtechImage {
          data {
            attributes {
              url
            }
          }
        }

        services {
          serviceTitle
          serviceDescription
          serviceIcon {
            data {
              attributes {
                url
              }
            }
          }
        }

        competences {
          competenceTitle
          competenceDescription
          competenceImage {
            data {
              attributes {
                url
              }
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
  const content = data.homePage.data.attributes

  console.log('competences depuis home', content.competences)

  realizations.map((product) => {
    console.log(product.attributes.title)
  }
  )

  return (
    <div className='homePage'>
      <div className='homePageHero'>
        
        <div className='homePageSloganDescription'>
          <h1 className='h1'>You <span className='highlight-imagine'>imagine</span> it. <br/> We <span className='highlight-make'>make</span> it.</h1>
          <div className='companyDescription'>
            <p className='p'>{content.companyDescription}</p>
            <ContactUsButton/>
          </div>
        </div>

        <div className='luxuryMedtechRedirect'>
          <div className='linkImageContainer'>
            <div className='linkText'>
              <p className='bold1'>PRECIFLEX IN LUXURY</p>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.406765 19.9985H37.7788M37.7788 19.9985L19.0928 38.6845M37.7788 19.9985L19.0928 1.3125" stroke="black" stroke-width="2.5"/>
                </svg>
            </div>

            <img src={`http://localhost:1337${content.luxuryImage.data.attributes.url}`} className='homePageImage'/>
          </div>

          <div className='linkImageContainer'> 
            <div className='linkText'>
                <p className='bold1'>PRECIFLEX IN MEDTECH</p>
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.406765 19.9985H37.7788M37.7788 19.9985L19.0928 38.6845M37.7788 19.9985L19.0928 1.3125" stroke="black" stroke-width="2.5"/>
                  </svg>
              </div>
            <img src={`http://localhost:1337${content.medtechImage.data.attributes.url}`} className='homePageImage'/>
          </div>
        </div>

      </div>

      <div>
        <h2 className="h2">Turning ideas into products</h2>
        <div className='homePageServices'>
          {content.services.map((service) => (
              <div className='homePageOneService'>
                <img src={`http://localhost:1337${service.serviceIcon.data.attributes.url}`} alt={service.serviceTitle}/>
                <h2 className='h2'>{service.serviceTitle}</h2>
                <p>{service.serviceDescription}</p>
              </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="h2">Competences</h2>
        <CompetencesCarousel competences={content.competences}/>
      </div>

      <ContactSection/>

      <div>
        <h2 className="h2">Realizations</h2>

        <div className="productCards">

        {realizations.map((product) => (
          <ProductCard key={product.id} id={product.id} title={product.attributes.title} industry={product.attributes.industry} services={product.attributes.services} competences={product.attributes.competences} imageUrl={product.attributes.productImage.data.attributes.url}/>
        ))}

        </div>
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