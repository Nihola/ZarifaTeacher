import React from 'react'
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

export default function App() {
  return (
    <div>
      <Header/>
      <main>
        <Outlet/>
      </main>
      
       
 

      <Footer/>     
       
      <ScrollToTopButton />      
    </div>
  )
}
