import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Homepage.css";


const ServicesComponent = ({ services }) => {
    return (
        <div className="col-span-6 flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 hideScrollBar">
          {services.map((service, index) => (
            <Link to={`/services#${service.serviceTitle.toLowerCase()}`} key={index}>
              <div
                className={`flex-shrink-0 w-64 md:w-auto md:col-span-1 pr-4 md:pr-0 border-r-2 border-gray-200 ${
                  index === services.length - 1
                    ? "border-none"
                    : "md:border-none"
                }`}
              >
                <img
                  src={`http://localhost:1337${service.serviceIcon.data.attributes.url}`}
                  alt={service.serviceTitle}
                />
                <h2 className="title3 serviceTitleHover">{service.serviceTitle}</h2>
                <p className="p">{service.serviceDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      );
};

export default ServicesComponent;