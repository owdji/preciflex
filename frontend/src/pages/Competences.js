import React, { useState, useEffect } from 'react'
import { useQuery, gql } from '@apollo/client'
import '../styles/RealizationTemplate.css'
import ReactMarkdown from 'react-markdown'
import createToc from '../hooks/createToc'
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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='homePage'>
      <div className='h-[40vh] grid grid-cols-6'>
        <div className='col-span-2'>
          <h1 className='title1 col-span-2'>{data.competencesPage.data.attributes.title}</h1>
          <TableOfContent/>
        </div>
        <p className='col-start-4 col-end-6'>{data.competencesPage.data.attributes.description}</p>
      </div>
      <div className='grid grid-cols-12 gap-4'>
        <div className='realizationTemplateContent col-start-3 col-end-10'>
          <ReactMarkdown>{data.competencesPage.data.attributes.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  )
}

export default Competences