import React, { useEffect, useState } from 'react';
import './WineList.scss';
import { ContainerWrap } from './../../components/ContainerWrap'
import { WineCard } from '../../components/WineCard';
import { Link } from 'react-router-dom';

const wine  = [
  {id: 1, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 2, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 3, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 4, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 5, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 6, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 7, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 8, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 9, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 10, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 11, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
  {id: 12, name: 'Sauvignon Touraine 2021',type: 'White',price: '$19.99',bouttleVolume: 0.7,year: 2021,coutry: 'France',region: 'Touraine', mainImage: '',},
]


export const WinesList = () => {

  return (
   <>
    <ContainerWrap>
      <div>Test</div>
      <div className='winelist__title'>WinesList</div>
      <div className="winelist__wrap">
        {wine.map(item => {
          return (
           <div className="winelist__card" key={item.id}>
              <Link to={`/wines/${item.id}`} style={{ textDecoration: 'none' }}>
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
