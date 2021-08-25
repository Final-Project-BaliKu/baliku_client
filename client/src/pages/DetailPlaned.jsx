import React from 'react';
import Navbar from '../components/Navbar.jsx'

export default function DetailPlaned() {
  return (
    <div>
      <section className="text-gray-600 body-font relative overflow-x-hidden bgMytrip h-screen">
        <Navbar />
        <div className="container px-20 py-36 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100 bg-white rounded-lg p-20">
            <h1 className="text-3xl">Detail my plan</h1>
            
          </div>
        </div>
      </section>
    </div>
  )
}
