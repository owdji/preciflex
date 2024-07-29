import React from "react";
import { useQuery, gql } from "@apollo/client";
import ContactUsButton from "../components/ContactUsButton";
import ThreeDimensionCarousel from "../components/ThreeDimensionCarousel";
import ContactSection from "../components/ContactSection";
import CompetencesCarousel from "../components/CompetencesCarousel";
import ServiceCard from "../components/ServiceCard";
import ProductCards from "../components/ProductCards";
import ServicesComponent from "../components/ServicesComponent";

const LUXURYHOMEPAGE = gql`
  query getLuxuryHomePage {
    luxuryHomePage {
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
                description
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
`;
const LuxuryHomepage = () => {
  const { data, error, loading } = useQuery(LUXURYHOMEPAGE);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const content = data.luxuryHomePage.data.attributes;

  return (
    <div className="homePage grid grid-cols-6 gap-4">
      <div className="flex flex-col justify-between min-h-screen col-span-6 firstItemPading">
        <div className="grid grid-cols-6">
          <h1 className="title1 col-span-6 md:col-span-2">
            <span className="highlight-imagine">Creative</span> engineering
            solutions
          </h1>

          <div className=" col-span-6 md:col-start-4 md:col-end-6">
            <p className="p">{content.companyDescription}</p>
            <ContactUsButton />
          </div>
        </div>
 
        <img
          src={`http://localhost:1337${content.luxuryImage.data.attributes.url}`}
          className="col-span-6 w-full h-[300px] object-cover md:w-[100%]"
          alt="Luxury"
        />
      </div>
      
      <div className="sectionSpace col-span-6"></div>
      <div className="col-span-6 grid grid-cols-6">
        <h2 className="title2 col-span-6 md:col-start-1 md:col-end-4">
          Services
        </h2>

        <ServicesComponent services={content.services} />
      </div>
      {/* 
    <div className='col-span-6 h-full'>
      <h2 className='title2'>Services</h2>
      <div className='col-span-6 grid grid-cols-4'>
        {content.services.map((service, index) => (
          <ServiceCard key={index} title={service.serviceTitle} description={service.serviceDescription} icon={service.serviceIcon.data.attributes.url}/>
        ))}
      </div>
    </div> */}


      <div className="sectionSpace"></div>

      <div className="col-span-6 grid grid-cols-6">
        <h2 className="title2">Realizations</h2>
        <div className="col-span-6">
          <ThreeDimensionCarousel realizations={content.realizations.data} />
        </div>
      </div>
      {/* <h2 className="title2 col-span-6">More realizations</h2>
      <div className="col-span-6">
        <ProductCards data={content.realizations.data} />
      </div> */}
      <div className="sectionSpace"></div>
      <div className="col-span-6">
        <ContactSection />
      </div>

      <div className="sectionSpace"></div>

      <div className="col-span-6 grid grid-cols-6">
        <h2 className="title2">Competences</h2>
        <CompetencesCarousel competences={content.competences} />
      </div>
    </div>
  );
};

export default LuxuryHomepage;
