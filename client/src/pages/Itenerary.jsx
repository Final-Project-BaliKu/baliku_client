import React, {useState} from 'react';
import DragBox from '../components/DragDrop/DragThingsToBoxesDemo.jsx';
import Navbar from '../components/Navbar.jsx'

export default function Itenerary() {

  return (
    <div className="h-full bg-blue-900 relative overflow-hidden pr-10 ">
      <Navbar/>
      <section className="text-gray-600 body-font py-5 ml-60 ">
        <div className="container px-10 py-16 mx-auto ">
          <div className="shadow-xl  mt-auto mb-auto lg:w-full pl-40 sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-10">
            <DragBox/>
          </div>
        </div>
      </section>
    </div>
  )
}
