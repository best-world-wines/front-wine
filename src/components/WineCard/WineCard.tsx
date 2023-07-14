import './WineCard.scss';
import React from 'react';

export const WineCard = ({wine}) => {
  const {
    name,
    type,
    price,
    bouttleVolume,
    year,
    coutry,
    region,
    mainImage
  } = wine
 return (
  <div className="wine-card">
    <div className="wine-card__wrap">
      <div className="wine-card__left">
        <img
          src={mainImage}
          alt={name}
          className='wine-card__img'
        />
        <h3 className='wine-card__title'>{name}</h3>
        <div className="wine-card__type">{type}</div>
        <div className="wine-card__region">{region} {year} {coutry}</div>
      </div>
      <div className="wine-card__right">
        <div className="wine-card__price">
          pice:<br/>
          <span className='wine-card__price--number'>
            {price}
          </span>
        </div>

        <div className="wine-card__volume">
          volume:<br/>
          <span className='wine-card__volume--number'>
            {bouttleVolume}
          </span>
        </div>

        <button
          className="wine-card__buy"
        >buy</button>
      </div>
    </div>

  </div>
 )
};
