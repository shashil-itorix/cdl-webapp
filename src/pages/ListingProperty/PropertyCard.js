import React from 'react';
import "./style.scss";


const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <div className="image">
        <img src={property.imagesLinks[0]} alt="property" />
      </div>
      <div className='card-details'>
        <div className="card-header">
            <p className='location'>{property.country}</p>
            <p className="name">{property.name}</p>
        </div>
        <div className="sale">
            <p>{property.status}</p>
        </div>
        <div className="district">
            <p>{property.fullLocation}</p>
        </div>
        <div className="read">
            Read More
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
