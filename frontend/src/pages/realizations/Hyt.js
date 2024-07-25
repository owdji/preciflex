import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Text, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { ModuleFluidiqueHero } from '../../3d/ModuleFluidiqueHero';
import ModuleFluidiqueForAnimation from '../../3d/ModuleFluidiqueForAnimation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../../styles/Hyt.css';
import ContactSection from '../../components/ContactSection';
import { gql, useQuery } from '@apollo/client';
import ProductCards from '../../components/ProductCards';

gsap.registerPlugin(ScrollTrigger);

//SOLUTION METTRE DIRECTEMENT LA 3D ICI PLUS TOT QUE DANS UN COMPONENT
//REGARDER LE CODE DE LA MEUF 
const HYT = gql`
  query getRealization {
  realization(id: 3) {
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
      }
    }
  }
}
`

const Hyt = () => {
  const {data, error, loading} = useQuery(HYT)
  const [realizationPageContent, setRealizationPageContent] = useState(null);
  const moduleFluidiqueRef = useRef();
  // const moduleFluidiqueForAnimationRef = useRef();
  // const liquidRef = useRef();
  const [currentColor, setCurrentColor] = useState('blue');
  const [selectedSquare, setSelectedSquare] = useState(null);
  const [customerImage, setCustomerImage] = useState(null);

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
  //IF modulefluidique is undefined or null return loading
  return (
    <div className='grid grid-cols-6 homePage'>
      <div className='h-screen col-span-6 hytContainer'>
        <Canvas>
          <Environment preset="studio" />
          <ambientLight />
          <ModuleFluidiqueHero position={[0, 0, 0]} scale={[80, 80, 80]} />
          <Text position={[0, 0, 0.5]} color={'black'} scale={0.5}>HYT, module fluidique</Text>
        </Canvas>
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
          <img src={`http://localhost:1337${customerImage}`}  />
        </div>
    </div>
      <div className='col-span-6'>
          <ContactSection />
        </div>
        <div className='col-span-6'>
          <ProductCards />
          </div>
    </div>
  );
};

export default Hyt;
