import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import ReactMarkdown from 'react-markdown'
import '../../styles/RealizationTemplate.css'


const RealizationTemplate = () => {


  const { id } = useParams()
  const [tableOfContents, setTableOfContents] = useState([])

  const { data, error, loading } = useFetch(`http://localhost:1337/api/realizations/${id}`)
  useEffect(() => {
    if (data) {
      const newTableOfContents = [];
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((element) => {
        // Modifications des éléments
        element.id = element.innerText.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase();
        newTableOfContents.push(element.innerText.replace(/#+\s+/g, ''));
      });
      
      //remove first element
      setTableOfContents(newTableOfContents)

      console.log(tableOfContents)
    }
  }, [data]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div>
      <div>
        <h1>{data.attributes.title}</h1>
        {tableOfContents.map((title) => {
          return (
            <a href={`#${title.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase()}`}>{title} <br/></a>
          )
        })}
      </div>
      <div className='realizationPageContent'>
        <ReactMarkdown>
          {data.attributes.realizationPageContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default RealizationTemplate