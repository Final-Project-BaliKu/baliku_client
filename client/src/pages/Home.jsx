import React, { useEffect, useState } from 'react';
import FormItenerary from '../components/FloatForm.jsx';
import Navbar from '../components/Navbar.jsx';
import ContentHome from '../components/ContentHome.jsx';
import vid from '../_assets/vid.mp4';

export default function Home() {
   
  return (
    <div>
      <div className=' h-screen flex relative overflow-hidden'>
        <div className="w-4/12 bg-blue-900 absolute z-10 h-screen">
          <div className="container px-20 mt-5 mx-auto ">
            <div className="title relative top-56 ">
              <h1 className="text-4xl text-white mainTitle">Baliku.</h1>
              <h1 className="text-3xl text-white">Gate to discover</h1>
              <h1 className="text-3xl text-white">the real Bali.</h1>
            </div>
          </div>
        </div>

        <div className="px-20">
          <FormItenerary />
        </div>
          <Navbar />
        <div className="w-screen bg-black backgroundC">
          <div className="absolute md:bg-gradient-to-b from-white to-900 opacity-75 inset-0 z-0">
            <video autoPlay muted loop id="myVideo" >
              <source src={vid} type="video/mp4" />
              {/* <source src="https://visitbali.id/assets.v3/images/assets/hero/vid.mp4" type="video/mp4" /> */}
            </video>
          </div>
        </div>
      </div>
      <div className="px-20">
        <ContentHome/> 
      </div>
    </div>
  )
}