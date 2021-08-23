import React from 'react';
import Maps from '../components/Maps.jsx';
import { useHistory } from 'react-router-dom';

export default function DetailTrip() {
  const history = useHistory()

  const back = () => {
    history.push('/summary');
  }

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg max-h-96  sm:mr-10 flex items-end justify-start relative overflow-hidden">
            <Maps/>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-3xl mb-5">Day 2 Trip</h2>
            <ul>
              <li>1. Sanur</li>
              <li>2. Kuta</li>
              <li>3. Tanah Lot</li>
            </ul>
          </div>
        </div>
          <button className="btn btn-success rounded ml-20" onClick={back}>BACK</button>
          <button className="btn bg-blue-900 rounded mx-5">Optimize Path</button>
      </section>
    </div>
  )
}
