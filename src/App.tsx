import './App.scss';

import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import { WinesList } from './pages/WineListPage/WineList';
import { NotFoundPage } from './pages/NotFoundPage/NotFound';
import { Header } from './components/Header';
import React, { useEffect, useState } from 'react';
import { Breadcrumbss } from './components/Breadcrumbs/Breadcrumbs';
import { Footer } from './components/Footer';
import {WineCardDetail} from './components/WineCardDetail'






export const App = () => {
  const [vine, setVine] = useState([]);
  // dgagadgsgds

  return (
      <div className="App">
        <Header />
        <main className='main'>
          <Breadcrumbss />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="wines" element={<WinesList />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path='wines/:vineId' element={<WineCardDetail/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
  );
};
