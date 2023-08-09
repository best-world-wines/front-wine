import React, { useEffect, useState } from 'react';
import './WineList.scss';
import { ContainerWrap } from './../../components/ContainerWrap'
import { WineCard } from '../../components/WineCard';
import { Link } from 'react-router-dom';


export const WinesList = ({wine, setOneWine}) => {
  const clickHadlers = (oneItem) => {
    setOneWine(oneItem)
  }

  return (
   <>
   <div>Card</div>
    <ContainerWrap>
      <div>Test</div>
      <div className='winelist__title'>WinesList</div>
      <div className="winelist__wrap">
        {wine.map(item => {
          return (
           <div className="winelist__card" key={item.id}>
              <Link
                to={`/wines/${item.id}`}
                style={{ textDecoration: 'none' }}
                onClick={() => {
                  clickHadlers(item)
                }}
              >
                <WineCard
                  wine={item}
                />
              </Link>
           </div>
          )
        })}
      </div>
    </ContainerWrap>
   </>
  )
}
