import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'
import ReactMarkdown from 'react-markdown'
import '../../styles/RealizationTemplate.css'

const REALIZATION = gql`
query getRealization($id: ID!) {
  realization(id: $id) {
    data {
      attributes {
        title
        industry
        banner {
          data {
            attributes {
              url
            }
          }
        }
        services
        competences
        realizationPageContent
      }
    }
  }
}
`

const RealizationTemplate = () => {
  const { id } = useParams()
  const [tableOfContents, setTableOfContents] = useState([])
  const { data, error, loading } = useQuery(REALIZATION, {
    variables: { id: id }
  })

  useEffect(() => {
      const newTableOfContents = [];
      document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((element) => {
        // Modifications des éléments
        element.id = element.innerText.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase();
        newTableOfContents.push(element.innerText.replace(/#+\s+/g, ''));
      });
      
      //remove first element
      setTableOfContents(newTableOfContents)

      console.log(tableOfContents)
  }, [data]);

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  const realization = data.realization.data
  console.log('DATA :', data)
  console.log('REALIZATION :', realization)
  return (
    <div className='realizationTemplate'>
      <div className='realizationTemplateHero'>
        <div>
          <h1 className='realizationTemplatemainTitle'>{realization.attributes.title}</h1>
          <div className='realizationTemplateTableOfContents'>
          {tableOfContents.map((title, index) => {
            return (
              <a key={index} href={`#${title.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase()}`}>{title} <br/></a>
            )
          })}
          </div>
        </div>

        <img src={`http://localhost:1337${realization.attributes.banner.data.attributes.url}`} className='realizationTemplateImage'/>
      </div>
      <div className='realizationTemplateContent'>
        <ReactMarkdown>
          {realization.attributes.realizationPageContent}
        </ReactMarkdown>
      </div>
    </div>
  )
}

export default RealizationTemplate

//------------------------------------------------------------
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import useFetch from '../../hooks/useFetch'
// import ReactMarkdown from 'react-markdown'
// import '../../styles/RealizationTemplate.css'


// const RealizationTemplate = () => {
  

//   const { id } = useParams()
//   const [tableOfContents, setTableOfContents] = useState([])

//   const { data, error, loading } = useFetch(`http://localhost:1337/api/realizations/${id}?populate=*`)
//   useEffect(() => {
//     if (data) {
//       const newTableOfContents = [];
//       document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((element) => {
//         // Modifications des éléments
//         element.id = element.innerText.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase();
//         newTableOfContents.push(element.innerText.replace(/#+\s+/g, ''));
//       });
      
//       //remove first element
//       setTableOfContents(newTableOfContents)

//       console.log(tableOfContents)
//     }
//   }, [data]);

//   if (loading) return <div>Loading...</div>
//   if (error) return <div>Error: {error.message}</div>

//   console.log(data)
//   return (
//     <div className='realizationTemplate'>
//       <div className='realizationTemplateHero'>
//         <div>
//           <h1 className='realizationTemplatemainTitle'>{data.attributes.title}</h1>
//           <div className='realizationTemplateTableOfContents'>
//           {tableOfContents.map((title, index) => {
//             return (
//               <a key={index} href={`#${title.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase()}`}>{title} <br/></a>
//             )
//           })}
//           </div>
//         </div>

//         <img src={`http://localhost:1337${data.attributes.banner.data.attributes.url}`} className='realizationTemplateImage'/>
//       </div>
//       <div className='realizationTemplateContent'>
//         <ReactMarkdown>
//           {data.attributes.realizationPageContent}
//         </ReactMarkdown>
//       </div>
//     </div>
//   )
// }

// export default RealizationTemplate