import React, { useEffect, useState, useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import ServicesLinkWord from '../components/ServicesLinkWord';
import { useQuery, gql } from '@apollo/client';
import '../styles/Services.css'
import PreciflexButton from '../components/PreciflexButton';

gsap.registerPlugin(ScrollTrigger)

const SERVICESPAGE = gql`
  query getServicesPage {
    servicesPage {
      data {
        attributes {
          ideation {
            step
            stepDescription
          }
          rAndD {
            step
            stepDescription
          }
        }
      }
    }
  }
`
const Services = () => {
  const { data, error, loading } = useQuery(SERVICESPAGE)
  const [rerender, setRerender] = useState(false)

  //NAVIGATION STUFF
  const ideationRef = useRef(null)
  const rAndDRef = useRef(null)
  
  const scrollToService = (ref) => {
    ref.current.scrollIntoView({behavior: 'smooth', block: 'start'})
  }

  //ANIMATION STUFF
useEffect(() => {
  const timer = setTimeout(() => setRerender(true), 500);
  return () => clearTimeout(timer);
}, data);
  //LE PROBLEME DU REREND VIENT SUREMENT DE CA
  const stepTexts = document.querySelectorAll('.stepText')
  const paragraphTexts = document.querySelectorAll('.paragraphText')
  const serviceContainer = document.querySelectorAll('.serviceContainer')

  useGSAP(() => {
    stepTexts.forEach(stepText => {
      gsap.fromTo(stepText, 
        {
          color: '#000000', 
        },
        {
        color: '#006EEB', 
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: stepText,
          toggleActions: 'restart reverse play reverse',  
          start: 'top center',
          end: 'bottom center',
          markers: false ,    
         },  
      })      
    })  

    let i = 0; 
    paragraphTexts.forEach(paragraphText => {
      gsap.fromTo(paragraphText, 
        {
          opacity: 0, 
        },
        {
        color: '#000000', 
        opacity: 1,
        duration: 0.2,
        scrollTrigger: { 
          trigger: stepTexts[i],
          toggleActions: 'restart reverse play reset',  
          start: 'top center',
          end: 'bottom center',
          markers: false,   
         },  
      })
      i++
    }
    )

    //only show one by time
    serviceContainer.forEach((service => {
      gsap.fromTo(service, 
        {
          opacity: 0, 
        },
        {
        color: '#000000', 
        opacity: 1,
        duration: 0.2,
        scrollTrigger: { 
          trigger: service,
          toggleActions: 'restart reverse play reset',  
          start: 'top center',
          end: 'bottom center',
          markers: false,   
         },  
      })
    }))
  },null)  
 
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const content = data.servicesPage.data
  const ideation = content.attributes.ideation
  const rAndD = content.attributes.rAndD

  return (
    <div className='homePage'>
      <div className='h-screen flex flex-col justify-center items-center'>
        <h1 className='title1 servicesTitle'>
          At Preciflex, we support our clients through every step of the process, from &nbsp; 
          <ServicesLinkWord 
          word='ideation' 
          icon={(<svg className='servicesIcon' width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00781 17.1816H14.1733M8.43039 20.0618H12.7159" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M7.76809 14.9559C7.76809 12.952 3.96875 12.041 3.96875 7.95543C3.96875 3.86986 7.3003 1.18945 10.5489 1.18945M13.3265 14.956C13.3265 12.952 17.1258 12.041 17.1258 7.95543C17.1258 3.86986 13.7943 1.18945 10.5457 1.18945" stroke="#006EEB" stroke-width="1.8"/>
          </svg>)} link='link'/>


          &nbsp; and &nbsp;
          <ServicesLinkWord 
          word={'R&D'} 
          icon={(<svg className='servicesIcon' width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_2698_30062)">
            <path d="M16.5742 10.6641C18.9503 12.4003 18.3105 16.0327 17.4424 16.9467" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M12.3902 10.2764L7.83815 14.6734L4.75391 11.4805L15.4795 1.1201L18.5637 4.31306L15.7192 7.05246" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M7.53906 8.79102L10.6233 11.984" stroke="#006EEB" stroke-width="1.8"/>
            <circle cx="14.5519" cy="9.19249" r="2.51671" stroke="#006EEB" stroke-width="1.8"/>
            <rect x="12.3438" y="16.8535" width="7.56221" height="3.47296" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M14.7765 20.3262H3.02344" stroke="#006EEB" stroke-width="1.8"/>
            </g>
            <defs>
            <clipPath id="clip0_2698_30062">
            <rect width="21.2891" height="21.4433" fill="white" transform="translate(0.820312)"/>
            </clipPath>
            </defs>
          </svg> )}
          />

          &nbsp; to &nbsp; 
          <ServicesLinkWord word={'industrialization'} 
          icon={(<svg className='servicesIcon' width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9477 19.2428H2.12891V2.37891H6.36891V8.72286L13.3503 5.21621V8.72286L20.6187 5.21621V19.2428H16.3788M11.9477 19.2428V13.1221H16.3788V19.2428M11.9477 19.2428H16.3788" stroke="#006EEB" stroke-width="1.8"/>
            </svg>
            )}/> and &nbsp; 
          <ServicesLinkWord word={'production'}
          icon={(<svg className="servicesIcon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.2324 6.93748V12.6055M14.2324 12.6055L11.3984 9.77148M14.2324 12.6055L17.0664 9.77148" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M7.64644 8.1875L9.79285 9.42673V11.9052L7.64644 13.1444L5.50002 11.9052V9.42673L7.64644 8.1875Z" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M14.2324 1.98047L16.3788 3.2197V5.69817L14.2324 6.93741L12.086 5.69817V3.2197L14.2324 1.98047Z" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M4.32613 14.1423L6.47254 15.3816V17.86L4.32613 19.0993L2.17971 17.86V15.3816L4.32613 14.1423Z" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M10.9238 14.1426L13.0702 15.3818V17.8603L10.9238 19.0995L8.77736 17.8603V15.3818L10.9238 14.1426Z" stroke="#006EEB" stroke-width="1.8"/>
            <path d="M17.5253 14.1426L19.6718 15.3818V17.8603L17.5253 19.0995L15.3789 17.8603V15.3818L17.5253 14.1426Z" stroke="#006EEB" stroke-width="1.8"/>
            </svg>
            )}/>, 
          or at any specific stage they need.
        </h1>
        <PreciflexButton value='Discover more' icon='bottomArrow' bold />
      </div>

      <div className='w-[100%] flex flex-col items-center'>
        <div className='servicesNavigation'>
          <p onClick={() => scrollToService(ideationRef)}>Ideation</p>
          <p onClick={() => scrollToService(rAndDRef)}>R&D</p>
          <p>Industrialization</p>
          <p>Production</p>
        </div>
        <div id='#ideation' ref={ideationRef} className='serviceContainer grid grid-cols-6'>
          {ideation.map((item, index) => (
            <div key={index} className='descriptionAndStep col-span-4 col-start-2'>
                <p className='paragraphText'>{item.stepDescription}</p>
                <p className='stepText col-span-1'>{item.step}</p>
            </div>
          ))}
        </div>
        <div className='sectionSpace'></div>
        <div id='#R&D' ref={rAndDRef} className='serviceContainer grid grid-cols-6'>
          {rAndD.map((item, index) => (
            <div key={index} className='descriptionAndStep col-span-4 col-start-2'>
                <p className='paragraphText'>{item.stepDescription}</p>
                <p className='stepText col-span-1'>{item.step}</p>
            </div>
          ))}
          </div>
      </div>
    </div>
  )
}

export default Services