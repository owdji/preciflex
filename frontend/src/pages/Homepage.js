import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useQuery, gql } from "@apollo/client";
import "../styles/Homepage.css";
import ContactUsButton from "../components/ContactUsButton";
import CompetencesCarousel from "../components/CompetencesCarousel";
import ContactSection from "../components/ContactSection";
import ProductCards from "../components/ProductCards";
// import Style from '../components/Style'

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
`;

const Homepage = () => {
  const { data, error, loading } = useQuery(HOMPAGE);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const realizations = data.homePage.data.attributes.realizations.data;
  const content = data.homePage.data.attributes;

  return (
    <div className="homePage grid grid-cols-6 gap-4">
<div className="flex flex-col justify-between h-screen col-span-6 firstItemPading">
  <div className="grid grid-cols-6 gap-4 flex-grow">
    <h1 className="title1 col-span-6 md:col-span-3 lg:col-span-2">
      You <span className="highlight-imagine">imagine</span> it. <br />
      We <span className="highlight-make">make</span> it.
    </h1>
    <div className="col-span-6 md:col-start-4 md:col-end-7 lg:col-start-4 lg:col-end-6">
      <p className="p">{content.companyDescription}</p>
      <ContactUsButton />
    </div>
  </div>
  
  <div className="grid grid-cols-6 md:grid-cols-4 gap-4 mt-auto">
    <div className="col-span-6 md:col-span-2">
      <div className="linkText flex justify-between items-center">
        <p className="title4">PRECIFLEX IN LUXURY</p>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.406765 19.9985H37.7788M37.7788 19.9985L19.0928 38.6845M37.7788 19.9985L19.0928 1.3125"
            stroke="black"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <img
        src={`http://localhost:1337${content.luxuryImage.data.attributes.url}`}
        className="homePageImage w-full"
      />
    </div>
    <div className="col-span-6 md:col-span-2">
      <div className="linkText flex justify-between items-center">
        <p className="title4">PRECIFLEX IN MEDTECH</p>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.406765 19.9985H37.7788M37.7788 19.9985L19.0928 38.6845M37.7788 19.9985L19.0928 1.3125"
            stroke="black"
            strokeWidth="2.5"
          />
        </svg>
      </div>
      <img
        src={`http://localhost:1337${content.medtechImage.data.attributes.url}`}
        className="homePageImage w-full"
      />
    </div>
  </div>
</div>

      <div className="sectionSpace"></div>

      <div className="col-span-6 grid grid-cols-6">
        <h2 className="title2 col-span-6 md:col-start-1 md:col-end-6">
          Turning ideas into products
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

      <div className="sectionSpace"></div>

      <div className="col-span-6">
        <h2 className="title2">Competences</h2>
        <CompetencesCarousel competences={content.competences} />
      </div>

      <div className="sectionSpace"></div>

      <div className="col-span-6">
        <ContactSection />
      </div>

      <div className="sectionSpace"></div>

      <div className="col-span-6">
        <h2 className="title2">Realizations</h2>
        <div className="col-span-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          <ProductCards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

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
