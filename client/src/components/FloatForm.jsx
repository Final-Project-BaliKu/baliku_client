import React from 'react'
import logo2 from '../_assets/logo2.png'

export default function FloatForm() {
  return (
    <div>
      <div className="absolute top-2/3 w-4/6  z-10">
        <div className="shadow-md rounded-md p-4 bg-white w-full relative overflow-hidden">
          <div className="flex justify-end mb-3 text-blue-600 gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div className="flex gap-2 flex-col md:flex-row center">
            <div className="relative flex-1">
              <input id="departure" value="Uluwatu Bali" name="departure" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:border-2 p-3" placeholder="quelquechose" />
              <label for="departure" className="absolute left-2 px-1 -top-2.5 bg-white text-blue-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Itinerary name :</label>
              <div className="absolute right-0 top-0 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>
            <div className="relative self-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <div></div>
            <div className="relative flex-1">
              <input id="eta" value="20/07/2021" name="eta" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:border-2 p-3" placeholder="quelquechose" />
              <label for="eta" className="absolute left-2 px-1 -top-2.5 bg-white text-blue-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Check in</label>
              <div className="absolute right-0 top-0 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="relative flex-1 absolute z-20">
              <input id="etd" value="20/07/2021" name="etd" type="text" className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:border-2 p-3" placeholder="quelquechose" />
              <label for="etd" className="absolute left-2 px-1 -top-2.5 bg-white text-blue-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm">Check out</label>
              <div className="absolute right-0 top-0 mt-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="relative flex-1">
              <button className="bg-blue-900 text-white text-sm rounded px-6 py-2.5 absolute z-20">SUBMIT</button>
            </div>
          </div>
          <div style={{position: 'absolute', top: '0', right: '0px', overflow:'hidden', width:'300px', height:'300px'}}>
            <img src={logo2} alt="" width="100%" />  
          </div>
        </div>
      </div>
    </div>
  )
}