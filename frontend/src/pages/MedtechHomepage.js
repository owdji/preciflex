import React from 'react'
import { useQuery, gql } from '@apollo/client'
import ContactUsButton from '../components/ContactUsButton'
import ThreeDimensionCarousel from '../components/ThreeDimensionCarousel'
import ContactSection from '../components/ContactSection'
import CompetencesCarousel from '../components/CompetencesCarousel'
import ServiceCard from '../components/ServiceCard'
import ProductCards from '../components/ProductCards'
import ServicesComponent from '../components/ServicesComponent'

const MEDTECHHOMEPAGE = gql`
  query getMedtechHomepage {
    medtechHomePage {
      data {
        attributes {
          companyDescription

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

const MedtechHomepage = () => {
  const { data, error, loading } = useQuery(MEDTECHHOMEPAGE)
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const content = data.medtechHomePage.data.attributes
  
  //filter realiations one with only the industry medtech
  const medtechRealizations = content.realizations.data.filter((realization) => realization.attributes.industry === 'medtech')
  //the other only with the industry luxury
  const luxuryRealizations = content.realizations.data.filter((realization) => realization.attributes.industry === 'luxury')

  return (
    <div className='homePage grid grid-cols-6 gap-x-4'>
      {/* Hero Section */}
      <div className="flex flex-col justify-between min-h-screen col-span-6 firstItemPading">
        <div className="grid grid-cols-6">
          <h1 className="title1 col-span-6 md:col-span-2">
            Your <span className="highlight-imagine">Vision</span> our
            expertise
          </h1>

          <div className=" col-span-6 md:col-start-4 md:col-end-6">
            <p className="p">{content.companyDescription}</p>
            <ContactUsButton />
          </div>
        </div>
 
        <img
          src={`http://localhost:1337${content.medtechImage.data.attributes.url}`}
          className="col-span-6 w-full h-[300px] object-cover md:w-[100%]"
          alt="Luxury"
        />
      </div>
  
      <div className='sectionSpace'></div>
  
      {/* Services Section */}
      <div className="col-span-6 grid grid-cols-6">
        <h2 className="title2 col-span-6 md:col-start-1 md:col-end-4">
          Services
        </h2>

        {/* <div className="col-span-6 flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 hideScrollBar">
          {content.services.map((service, index) => (
            <div
              className={`flex-shrink-0 w-64 md:w-auto md:col-span-1 pr-4 md:pr-0 border-r-2 border-gray-200 ${
                index === content.services.length - 1
                  ? "border-none"
                  : "md:border-none"
              }`}
              key={index}
            >
              <img
                src={`http://localhost:1337${service.serviceIcon.data.attributes.url}`}
                alt={service.serviceTitle}
              />
              <h2 className="title3">{service.serviceTitle}</h2>
              <p className="p">{service.serviceDescription}</p>
            </div>
          ))}
        </div> */}
        <ServicesComponent services={content.services} />
      </div>
  
      <div className='sectionSpace'></div>
  
      {/* Realizations Section */}
      <div className='col-span-6'>
        <h2 className='title2'>Realizations</h2>
        <ThreeDimensionCarousel realizations={medtechRealizations} />
      </div>
  
      <h2 className='title2 col-span-6'>More realizations</h2>
      <div className='col-span-6'>
        <ProductCards data={luxuryRealizations} />
      </div>
  
      <div className='sectionSpace'></div>
  
      {/* Contact Section */}
      <div className='col-span-6'>
        <ContactSection />
      </div>
  
      <div className='sectionSpace'></div>
  
      {/* Competences Section */}
      <div className='col-span-6'>
        <h2 className='title2'>Competences</h2>
        <CompetencesCarousel competences={content.competences} />
      </div>
    </div>
  );
  
}

export default MedtechHomepage