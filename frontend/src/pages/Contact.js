import React, { useRef, useState } from 'react'
import AboutOption from '../components/AboutOption'
import emailjs from '@emailjs/browser'
import PreciflexButton from '../components/PreciflexButton'

const Contact = () => {
  const [selectedAbout, setSelectedAbout] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()

  const handleSelectedAbout = (about) => {
    setSelectedAbout(about)
    if(selectedAbout.includes(about)){
      setSelectedAbout(selectedAbout.filter(item => item !== about))
    } else {
      setSelectedAbout([...selectedAbout, about])
    }
  }


  const sendEmail = () => {
    //check if full name and message are filled
    if(name === '' || message === ''){
      setErrorMessage('Please fill in your full name and message')
      return
    }
    //check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
      setErrorMessage('Please enter a valid email address')
      return
    }
    
    //all selected about in a string separated by commas
    const stringSelectedAbout = selectedAbout.join(', ')
    const templateParams = {
      selectedAbout: stringSelectedAbout,
      name: name,
      email: email,
      company: company,
      message: message,
    }

    console.log('TEMPLATE PARAMS', templateParams)

    emailjs.send('service_9lb05yg', 'template_5u7dfrf', templateParams, 'Cu1xWu5wTdx2Vj9Sr').then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
      },
      (error) => {
        console.log('FAILED...', error);
      },
    );
  }

  return (
    <div className='h-screen homePage grid grid-cols-6 h-screen'>
      <div className='col-span-2'>
        <h1 className='title1'>Contact <span className='highlight-make'>Preciflex</span></h1>
        <PreciflexButton onClick={() => window.location.href = 'tel:032 513 56 56'} value='+032 513 56 56' icon='phone' bold />
        <PreciflexButton onClick={() => window.location.href = 'mailto:info@preciflex.ch'} value='info@preciflex.ch' icon='email' bold />
      </div>
      <div className='col-span-4'>
        <h2 className='title2'>About ?</h2>
        <div className='grid grid-cols-2 abouOptionsContainer'>
          <AboutOption title='All services' sendSelectedAbout={handleSelectedAbout}/>
          <AboutOption title='Industrialization' sendSelectedAbout={handleSelectedAbout}/>
          <AboutOption title='Ideation'sendSelectedAbout={handleSelectedAbout}/>
          <AboutOption title='Research & development' sendSelectedAbout={handleSelectedAbout}/>
          <AboutOption title='Production' sendSelectedAbout={handleSelectedAbout}/>
          <AboutOption title='Other' sendSelectedAbout={handleSelectedAbout}/>
        </div>
        <h2 className='title2'>Introduce youreself</h2>
        {/* create a form with full name, email, company */}
        <p className='p text-[#DC2855] mb-4'>{errorMessage}</p>
        <form className='grid grid-cols-4 gap-4' ref={form}>
          <div className='col-span-2'>
            {/* <div className='bg-blue-500 col-span-2 h-8'></div> */}
            <label className='col-span-2 p text-electric-blue'>Full name*</label>
            <input className='contactInput col-span-2 p h-10' type='text' placeholder='Full name' value={name} onChange={(e) => setName(e.target.value)}/>

            <label className='col-span-2 p text-electric-blue'>Email*</label>
            <input className='contactInput p h-10' type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label className='col-span-2 p text-electric-blue'>Company</label>
            <input className='contactInput p h-10 ' type='text' placeholder='Company' value={company} onChange={(e) => setCompany(e.target.value)}/>
          </div>

          <div className='col-span-2 flex-col'>
            <label className='p text-electric-blue w-full'>Your enquiry*</label>
            <textarea className='contactInput p h-40' placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
          </div>
          <div className='col-span-2 grid grid-cols-2 ' >
            <PreciflexButton onClick={sendEmail} value={'Send'} bold />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact