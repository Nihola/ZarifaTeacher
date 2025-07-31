import React, { useEffect } from 'react'
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
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
