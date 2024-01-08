import React from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Bebas_Neue } from "next/font/google";
import FullLineup from '@/components/FullLineup';
import BackBtn from "@/components/BackBtn";
 

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "FooFest | Billetter",
};


function LineupPage () {

  return (
    <>
      <Header />    
      <main>     
        <div className='mt-40 -mb-28 md:-mb-38 md:ml-10'>
     <BackBtn /></div> 
        <h1
          className={`${bebasNeue.className} text-6xl md:text-7xl lg:text-8xl xl:text-9xl mt-32 text-center text-fooYellow-200`}
        >
          FooFest 2024 Lineup
        </h1>

        <FullLineup />
      </main>
      <Footer />
    </>
  );
}

export default LineupPage