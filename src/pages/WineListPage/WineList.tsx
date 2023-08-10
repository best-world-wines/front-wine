import React, { FC, useEffect, useState } from 'react';
import './WineList.scss';
import { ContainerWrap } from './../../components/ContainerWrap'
import { WineCard } from '../../components/WineCard';
import { Link } from 'react-router-dom';
import { WineCardType } from '../../types/WineCard';

type Props = {
  wines: WineCardType[] | null,
  setOneWine: (wine: WineCardType | null) => void;
}


export const WinesList: FC<Props> = ({
  wines,
  setOneWine
}) => {
  const clickHadlers = (oneItem) => {
    setOneWine(oneItem)
  }

  return (
   <>
    <ContainerWrap>
      <div className='winelist__title'>WinesList</div>
      <div className="winelist__wrap">
        {(wines) &&  (
          wines.map(item => {
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
          })
        )}
      </div>
    </ContainerWrap>
   </>
  )
}
