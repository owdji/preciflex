import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../../styles/LightTech.css";
import ContactSection from "../../components/ContactSection";
import ProductCards from "../../components/ProductCards";
import LightTechWatch from "./LightTechWatch";
import { gql, useQuery } from '@apollo/client';


const LIGHTTECH = gql`
query getRealization {
  realization(id: 7) {
    data {
      attributes {
        realizationPageContent
        moreRealizations {
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

const LightTech = () => {
  const {data, error, loading} = useQuery(LIGHTTECH)
  const circleRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [realizationPageContent, setRealizationPageContent] = useState(null);



  useEffect(() => {
    if (data) {
      setRealizationPageContent(data.realization.data.attributes.realizationPageContent.split('\n'));
    } 
  }, [data])

  useGSAP(
    () => {
      gsap.to(circleRef.current, {
        x: mousePosition.x - 100,
        y: mousePosition.y - 100,
        ease: "power1.out",
      });
    },
    { dependencies: [mousePosition] }
  );

  const handleMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  if(!realizationPageContent) return <div>Loading...</div>
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>


  return (
    <div>
      <div className="h-screen lightTechHero" onMouseMove={handleMove}>
        <div className="lightTechCircle" ref={circleRef}></div>
        <h1 className="title1 text-center text-white">Light Technologies</h1>
        <p className="title4 text-white">PRECIFLEX</p>
      </div>

      <div className="md:grid grid-cols-6 homePage">
        <div className="col-span-6 grid grid-cols-6">
          <div className="col-span-6 md:col-span-2">
            <p className="mt-[43px]">
              {realizationPageContent[0]}
            </p>
            <p className="mt-20">
              {realizationPageContent[1]}
            </p>
          </div>

          <div className="col-span-6 md:col-start-3 md:col-end-5 lightTech-watch-container">
            <LightTechWatch />
          </div>
        </div>

        <div className="col-span-6 sectionSpace"></div>

        <div className="col-span-6">
          <ContactSection />

          <div className="col-span-6 sectionSpace"></div>

          <p className="title2">More realization</p>
          <ProductCards data={data.realization.data.attributes.moreRealizations.data}/>
          </div>
      </div>
    </div>
  );
};

export default LightTech;
