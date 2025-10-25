import React, { useEffect } from 'react'
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Timer from './components/Timer';
import SeoHeader from './components/SEOheader';
import { HeadProvider } from "react-head";

 
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <HeadProvider>
      <Header/>
      <SeoHeader
                    title="ZarifaTeacher - O‘quv Markazi Toshkentda"
                    description="IELTS va ingliz tili,IT,arab tili, rus tili Toshkentda. ZarifaTeacher — tajribali ustozlar bilan yuqori natijalarga erishing!"
                    keywords="o‘quv markaz, IELTS kursi, ingliz tili, ZarifaTeacher, Toshkent, arab tili CEFR, rus tili , CEFR,IT kursi, Frontend,Python kursi"
                  />
      <Timer/>
      <main className='pt-15 md:pt-20 sm:pt-60 max-sm:84'>
        <Outlet/>
      </main> 
 

      <Footer/>     
       
      <ScrollToTopButton />     
    </HeadProvider> 
     
  )
}
