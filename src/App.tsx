import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { HomePage } from './pages/HomePage/HomePage';
import { WinesList } from './pages/WineListPage/WineList';
import { NotFoundPage } from './pages/NotFoundPage/NotFound';

import { Header } from './components/Header';
import { Breadcrumbss } from './components/Breadcrumbs/Breadcrumbs';
import { Footer } from './components/Footer';
import {WineCardDetail} from './components/WineCardDetail'


import { WineCardType } from './types/WineCard';






export const App = () => {
  const [wines, setWines] = useState<WineCardType[] | null>(null)
  const [oneWine, setOneWine] = useState<WineCardType | null>(null);

  useEffect(() => {
    fetch('https://api.wine.exisvitae.com/api/v1/wines/pages',)
      .then((response) => {
        return response.json()
      })
      .then ((wines) => {
        setWines(wines.productsDto)
        // console.log(wines);

      })
  },[])

  console.log(wines);


  return (
      <div className="App">
        <Header />
        <main className='main'>
          <Breadcrumbss />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  sliderComponent={wines}
                />
              }

            />
            <Route path="wines" element={
              <WinesList
                wines={wines}
                setOneWine={setOneWine}
              />}
            />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='wines/:vineId' element={
              <WineCardDetail

              />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
  );
};
