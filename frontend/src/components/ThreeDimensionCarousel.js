import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { ModuleFluidique } from '../3d/ModuleFluidique';
import '../styles/ThreeDimensionCarousel.css'

export default function ThreeDimensionCarousel({realizations}) {
    const [current, setCurrent] = useState(0)


    const changeCurrent = (i) => {
        if(current + i === realizations.length){
            setCurrent(0)
            return
        } else if(current + i === -1){
            setCurrent(realizations.length - 1)
            return
        }

        setCurrent(current + i)
    }


    return (
        <div>
            {/* insert dots */}
            <div className='flex justify-center'>
                {realizations.map((realization, index) => (
                    <div key={index} onClick={() => setCurrent(index)} className={current === index ? 'dotActive' : 'dot'}></div>
                ))}
            </div>

            <div className='grid grid-cols-4'>
                <div className='sides'>
                    <svg onClick={() => changeCurrent(1)}  className='ThreedCarouselArrow' width="150" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25.2773 1.57492L1.45152 25.4007L25.2773 49.2266" stroke="black" strokeWidth="2"/>
                    </svg>
                    <div>
                        <h2 className='title3'>{realizations[current].attributes.title}</h2>

                        <h3 className='pBoldBlue'>Description</h3>
                        <p className='p'>{realizations[current].attributes.description}</p>
                    </div>
                </div>
                
                <div  className='col-start-2 col-end-4 canvas'>
                    <Canvas>        
                        <Environment preset="studio"  />                
                        <ambientLight />

                        <ModuleFluidique position={[0,0,0]} scale={[100,100,100]} look={true}/>
                    </Canvas>
                </div>


                <div className='col-start-4'>
                    <div className='sides'>
                        <div>
                            <h3 className='pBoldBlue'>Preciflex Services</h3>
                            {realizations[current].attributes.services.map((service, index) => (
                                <p key={index} className='p'>{service}</p>
                            ))}

                            <h3 className='pBoldBlue'>Competences</h3>
                            {realizations[current].attributes.competences.map((competence, index) => (
                                <p key={index} className='p'>{competence}</p>
                            ))}
                        </div>

                        <svg  onClick={() => changeCurrent(1)} className='ThreedCarouselArrow' width="150" height="50" viewBox="0 0 27 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.625 49.2259L25.4508 25.4L1.625 1.57422" stroke="black" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
