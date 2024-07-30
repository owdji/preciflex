import React from "react";
import { useQuery, gql } from "@apollo/client";
import TableOfContent from "../components/TableOfContent";
import ReactMarkdown from "react-markdown";
import config from '../config'
const ABOUT = gql`
  query getAboutPage {
    about {
      data {
        attributes {
          description
          content
          banner {
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
`;

const About = () => {
  const { data, error, loading } = useQuery(ABOUT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const content = data.about.data.attributes.content;

  console.log('getting data from', config)

  return (
    <div className="realizationTemplate">
      <div className="grid grid-cols-6 h-screen content-center">
        <div className="col-span-6 md:col-span-2">
          <h1 className="title1">
            <span className="highlight-imagine">About</span> Preciflex
          </h1>
        </div>

        <img
          src={`${config.apiUrl}${data.about.data.attributes.banner.data.attributes.url}`}
          className="col-span-6 md:col-span-4 realizationTemplateBanner"
        />
      </div>
      <div>
        <div className="flex justify-center">
          <div className="realizationTemplateContent md:p-[43px]">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
