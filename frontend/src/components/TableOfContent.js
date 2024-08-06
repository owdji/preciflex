import React, { useState, useEffect } from 'react';
import createToc from '../hooks/createToc';
import '../styles/RealizationTemplate.css';

const TableOfContent = () => {
  const [tableOfContents, setTableOfContents] = useState([]);
  const [visibleSubtitlesIndex, setVisibleSubtitlesIndex] = useState(null);

  useEffect(() => {
    const tocContent = document.querySelectorAll('.realizationTemplateContent h1, .realizationTemplateContent h2, .realizationTemplateContent h3, .realizationTemplateContent h4, .realizationTemplateContent h5, .realizationTemplateContent h6');
    const toc = createToc(tocContent);
    setTableOfContents(toc);
  }, []);

  const toggleSubtitles = (index) => {
    setVisibleSubtitlesIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <div className='tableOfContents sticky top-[1000px]'>
        {tableOfContents.map((title, index) => (
          <div key={index}>
            <div className='flex flex-row items-center'>
              {title.children.length > 0 && (
                <svg
                  onClick={() => toggleSubtitles(index)}
                  width="30"
                  height="12"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`arrow-icon ${visibleSubtitlesIndex === index ? 'rotated' : ''}`}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.2715 0.948303L8.6943 9.52549L0.117112 0.948303L0.891897 0.173518L8.6943 7.97592L16.4967 0.173518L17.2715 0.948303Z"
                    fill="#006EEB"
                  />
                </svg>
              )}
              <a
                className='pToc'
                href={`#${title.title.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase()}`}
              >
                {title.title} <br />
              </a>
            </div>
            <div className='ml-4'>
              {title.children.map((child, childIndex) => (
                <a
                  className={visibleSubtitlesIndex === index ? 'block pToc2' : 'hidden'}
                  key={childIndex}
                  href={`#${child.replace(/\s+/g, '-').replace(/^-/, '').toLowerCase()}`}
                >
                  {child} <br />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOfContent;