import './WineCard.scss';
import React from 'react';

export const WineCard = ({wine}) => {
  const {
    name,
    type,
    price,
    bottleVolume,
    year,
    alcohol,
    mainImage
  } = wine

  const priceInDollar = (price: number) => {
    const string = price.toString()
    return string.slice(0, -1) +',' + string.substring(-1, 1) + '0$'
  }

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
        <div className="wine-card__region">{year} year</div>

      </div>
      <div className="wine-card__right">
        <div className="wine-card__right-pice wine-card__price">
          pice:<br/>
          <span className='wine-card__right-pice--number-price'>
            {priceInDollar(price)}
          </span>
        </div>

        <div>
          <div className="wine-card__right-pice">
            volume:<br/>
            <span className='wine-card__right-pice--number'>
              {bottleVolume}ml
            </span>
          </div>

          <div className="wine-card__right-pice">
            alcohol:<br/>
            <span className='wine-card__right-pice--number'>
              {alcohol}%
            </span>
          </div>
        </div>

        <button
          className="wine-card__buy"
        >buy</button>
      </div>
    </div>

  </div>
 )
};
