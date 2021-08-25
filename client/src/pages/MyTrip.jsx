import React from 'react';
import Navbar from '../components/Navbar.jsx'
import { useHistory } from 'react-router-dom'

export default function MyTrip() {
  let history = useHistory()

  let detailHistory = (e) => {
    e.preventDefault()

    history.push('planed')

  }

  return (
    <section className="text-gray-600 body-font relative overflow-x-hidden bgMytrip">
      <Navbar/>
    <div className="container px-20 py-36 mx-auto">
      <div className="-my-8 divide-y-2 divide-gray-100 bg-white rounded-lg p-20">
        <h1 className="text-3xl">my History Trip</h1>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">TIME RESERVATION</span>
            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Astra Toyota Cikarang goes to Bali</h2>
            <p className="leading-relaxed">jumlah trip: 4 hari.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor" onClick={(e) => detailHistory(e)}>see history
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">TIME RESERVATION</span>
            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Outing Family Wijaya Fams</h2>
            <p className="leading-relaxed">jumlah trip: 4 hari.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4">see history
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="py-8 flex flex-wrap md:flex-nowrap">
          <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
            <span className="font-semibold title-font text-gray-700">TIME RESERVATION</span>
            <span className="text-sm text-gray-500">12 Jun 2019</span>
          </div>
          <div className="md:flex-grow">
            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Tour GMC Vocal Group</h2>
            <p className="leading-relaxed">jumlah trip: 4 hari.</p>
            <a className="text-indigo-500 inline-flex items-center mt-4">see history
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
