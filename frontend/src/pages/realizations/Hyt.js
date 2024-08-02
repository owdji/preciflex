import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Text, OrthographicCamera, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { ModuleFluidiqueHero } from '../../3d/ModuleFluidiqueHero';
import ModuleFluidiqueForAnimation from '../../3d/ModuleFluidiqueForAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../styles/Hyt.css';
import ContactSection from '../../components/ContactSection';
import { gql, useQuery } from '@apollo/client';
import ProductCards from '../../components/ProductCards';
import { ModuleFluidique } from '../../3d/ModuleFluidique';
import config from '../../config';

gsap.registerPlugin(ScrollTrigger);

const HYT = gql`
query getRealization {
  realization(id: 1) {
    data {
      attributes {
        banner {
          data {
            attributes {
              url
            }
          }
        }
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

const Hyt = () => {
  const {data, error, loading} = useQuery(HYT)
  const [realizationPageContent, setRealizationPageContent] = useState(null);
  const [currentColor, setCurrentColor] = useState('blue');
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [customerImage, setCustomerImage] = useState(null);
  const [isMobile , setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => window.removeEventListener('resize', handleResize);
  }, [])


  useEffect(() => {
    //when i have data i setrealizationpagecontent to an array of the content divided by the paragraphs
    if (data) {
      setRealizationPageContent(data.realization.data.attributes.realizationPageContent.split('\n'));
      setCustomerImage(data.realization.data.attributes.banner.data.attributes.url);
    } 
  }, [data])
   

  const handleSquareClick = (color, squareIndex) => {
    setCurrentColor(color);
    setSelectedSquare(squareIndex);
  };

  if(!realizationPageContent) return <div>Loading...</div>
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const hytHero = () => {
    return (
      <div className='h-screen col-span-6 hytContainer'>
        <Canvas>
          <Environment preset="studio" />
          <ambientLight />
          <ModuleFluidiqueHero position={[0, 0, 0]} scale={[80, 80, 80]} />
          <Text position={[0, 0, 0.5]} color={'black'} scale={isMobile ? 0.3 : 0.5}> HYT, fluidic module</Text>
        </Canvas>
      </div>
    )
  }
  //IF modulefluidique is undefined or null return loading
  if (isMobile === false) {
    return (
    <div className='grid grid-cols-6 homePage'>
      <div className='col-span-6'>
        {hytHero()}
      </div>
      <div className='col-span-6 grid grid-cols-6 gap-4'>
        <div className='hytCanavasContainer col-span-6'>
          <Canvas className='hytCanvas'>
            <Environment preset="studio" backgroundIntensity={100} />
            <PerspectiveCamera makeDefault position={[0, 0, 8]} /> 
            <ModuleFluidiqueForAnimation color={currentColor} position={[4, 0, 0]} rotation={[0, -0.1, 0]} scale={[100, 100, 100]} />
          </Canvas>
        </div>

        <div className='col-start-2 col-end-4 h-[60vh] firstSection'>
          <p>{realizationPageContent[0]}</p>
        </div>
        <br /> 
        <div className='col-start-4 col-end-6 h-[60vh] secondSection'>
          <p className='sticky top-[50%]'>{realizationPageContent[1]}</p>
        </div>
        <div className='col-start-4 col-end-6 h-[60vh] mt-10 thirdSection'>
          <div className='flex flex-col justify-center h-[60vh]'>
            <div className='flex flex-row'>
              <div className={`hytSquare hytBlue ${selectedSquare === 0 ? 'hytBlueSelectedSquare' : ''}`} onClick={() => handleSquareClick('#006EEB', 0)}></div>
              <div className={`hytSquare hytOrange ${selectedSquare === 1 ? 'hytSelectedSquare' : ''}`} onClick={() => handleSquareClick('#FFAA46', 1)}></div>
              <div className={`hytSquare hytRed ${selectedSquare === 2 ? 'hytSelectedSquare' : ''}`} onClick={() => handleSquareClick('#DC2754', 2)}></div>
              <div className={`hytSquare hytBlack ${selectedSquare === 3 ? 'hytSelectedSquare' : ''}`} onClick={() => handleSquareClick('#000000', 3)}></div>
            </div>
            <p>{realizationPageContent[2]}</p>
          </div>
        </div>
      </div>
      <div className='w-[100vw] bg-black grid grid-cols-6 pl-10 pr-10'>
        <div className='col-span-3 flex items-center'>
          <p className='text-white'>{realizationPageContent[3]}</p>
        </div>  
        <div className='col-span-3 flex items-center'>
          <img src={`${config.apiUrl}${customerImage}`}  />
        </div>
    </div>
    <div className='sectionSpace col-span-6'></div>
      <div className='col-span-6'>
          <ContactSection />
        </div>

        <div className='col-span-6 sectionSpace'>
          </div>
        <div className='col-span-6'>
          <h2 className='title2'>More realizations</h2>
          <ProductCards data={data.realization.data.attributes.moreRealizations.data}/>
        </div>
    </div>
  )} else {
    return (
    <div className='grid grid-cols-6'>
      <div className='col-span-6'>
        {hytHero()}
      </div>

      <div className='col-span-6 h-screen flex flex-col'>
        <div className='h-1/2 flex items-center justify-center sticky top-0 bg-white z-30'>
            <Canvas className='hytCanvas'>
                <Environment preset="studio" backgroundIntensity={100} />
                <PerspectiveCamera makeDefault position={[0, 0, 8]} /> 
                <OrbitControls enableZoom={false}/>
                <ModuleFluidique color={currentColor} position={[0, 0, 0]} rotation={[0, -0.1, 0]} scale={[100, 100, 100]} />
              </Canvas>
        </div>

        <div className='h-1/2 overflow-y-auto homePage hideScrollBar'>
          <p>{realizationPageContent[0]}</p>
          <div className='smallSpace'></div>

          <p>{realizationPageContent[1]}</p>
          <div className='smallSpace'></div>
          <div className='flex flex-row'>
              <div className={`hytSquare hytBlue ${selectedSquare === 0 ? 'hytBlueSelectedSquare' : ''}`} onClick={() => handleSquareClick('#006EEB', 0)}></div>
              <div className={`hytSquare hytOrange ${selectedSquare === 1 ? 'hytSelectedSquare' : ''}`} onClick={() => handleSquareClick('#FFAA46', 1)}></div>
              <div className={`hytSquare hytRed ${selectedSquare === 2 ? 'hytSelectedSquare' : ''}`} onClick={() => handleSquareClick('#DC2754', 2)}></div>
              <div className={`hytSquare hytBlack ${selectedSquare === 3 ? 'hytSelectedSquare' : ''}`} onClick={() => handleSquareClick('#000000', 3)}></div>
            </div>
          <p>{realizationPageContent[2]}</p>
        </div>
      </div>

      <div className='sectionSpace'></div>

      <div className='col-span-6 p-10 bg-black white text-white'>
        <p>{realizationPageContent[3]}</p>
        <img src={`${config.apiUrl}${customerImage}`}  />
      </div>

      <div className='sectionSpace'></div>

      <div className='col-span-6 homePage'>
        <h2 className='title2'>More realizations</h2>
        <div className='smallSpace'></div>
        <ProductCards data={data.realization.data.attributes.moreRealizations.data}/>

      </div>

    </div>
    )
  }
};

export default Hyt;
