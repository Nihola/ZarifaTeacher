import React, { useEffect } from 'react'
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timer from './components/Timer';
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <Header/>
      <Timer/>
      <main className='pt-15 md:pt-20 sm:pt-39'>
        <Outlet/>
      </main> 
 

      <Footer/>     
       
      <ScrollToTopButton />      
    </div>
  )
}
