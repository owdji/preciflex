import React from "react";
import { useQuery, gql } from "@apollo/client";
import ContactUsButton from "../components/ContactUsButton";
import ThreeDimensionCarousel from "../components/ThreeDimensionCarousel";
import ContactSection from "../components/ContactSection";
import CompetencesCarousel from "../components/CompetencesCarousel";
import ServiceCard from "../components/ServiceCard";

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
    <div className="homePage grid grid-cols-6 gap-x-4">
      <div className="col-span-6 grid grid-cols-6 h-screen">
        <h1 className="title1 col-span-6 md:col-span-2">
          <span className="highlight-imagine">Creative</span> engineering
          solutions
        </h1>

        <div className=" col-span-6 md:col-start-4 md:col-end-6">
          <p className="p">{content.companyDescription}</p>
          <ContactUsButton />
        </div>
        <img
          src={`http://localhost:1337${content.luxuryImage.data.attributes.url}`}
          className="col-span-6 w-full h-[300px]  object-cover md:w-auto md:h-auto md:object-contain aspect-square"
          alt="Luxury"
        />
      </div>
      <div className="sectionSpace col-span-6"></div>
      <div className="col-span-6 grid grid-cols-6">
        <h2 className="title2 col-span-6 md:col-start-1 md:col-end-4">
          Services
        </h2>

        <div className="col-span-6 flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 hideScrollBar">
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
        </div>
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
      <h2 className="title2 col-span-6">More realizations</h2>

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
