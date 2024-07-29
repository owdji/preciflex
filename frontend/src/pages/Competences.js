import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import '../styles/RealizationTemplate.css'
import ReactMarkdown from 'react-markdown'
import TableOfContent from '../components/TableOfContent'

const COMPETENCEPAGE = gql`
query getCompetencesPage {
  competencesPage {
    data {
      attributes {
        title
        description
        content
      }
    }
  }
}
`

const Competences = () => {
  const {data, error, loading} = useQuery(COMPETENCEPAGE)

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='homePage'>
      <div className='md:min-h-[40vh] grid grid-cols-6 firstItemPading'>
        <div className='col-span-6 md:col-span-2'>
          <h1 className='title1 col-span-2'>{data.competencesPage.data.attributes.title}</h1>
          {isMobile ? null : <TableOfContent/>}
        </div>
        <p className='col-span-6 md:col-start-4 md:col-end-6'>{data.competencesPage.data.attributes.description}</p>
      </div>
      <div className='flex justify-center'>
        <div className='realizationTemplateContent'>
          <ReactMarkdown>{data.competencesPage.data.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Competences