import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import axios from 'axios';

export default function AllDestinations() {
  const [attraction, setAttraction] = useState('');
  const getAllAttraction = async () => {
    await axios({
      method: 'GET',
      url: 'https://travel-advisor.p.rapidapi.com/attractions/list',
      params: {
        location_id: '294226',
        currency: 'USD',
        lang: 'en_US',
        lunit: 'km',
        sort: 'recommended'
      },
      headers: {
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
        'x-rapidapi-key': '6ce005067cmsh3fcf85adc75f757p1c39fcjsn3c484155bae8'
      }
    })
      .then(async ({ data }) => {
        data = data.data.filter(data => {
          return data.photo !== undefined
        })
        console.log(data);
        data = data.map(data => {
          return { name: data.name, locationId: data.location_id, location: data.address, latitude: data.latitude, longitude: data.longitude, rating: data.rating, description: data.description, image: data.photo.images.medium.url, ranking: data.ranking }
        })
        console.log(data);
        await setAttraction(data);
      })
  }
  useEffect(() => {
    getAllAttraction()
  }, [])

  return (

    <div className="bg-blue-900 relative overflow-hidden">
      <Navbar />
      <section className="text-gray-600 body-font px-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Master Cleanse Reliac Heirloom</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-white">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {attraction ?
              attraction.map(data => {
                return (
                  <div className="lg:w-1/3 sm:w-1/2 p-4">
                    <div className="flex relative">
                      <img alt="gallery" className="rounded-md absolute inset-0 w-full h-full object-cover object-center" src={data.image} />
                      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white  opacity-0 bg-opacity-0 hover:opacity-100 hover:bg-opacity-75 ">
                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 ">{data.ranking}</h2>
                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{data.name}</h1>
                        <p className="leading-relaxed overflow-y-auto h-32 ">{data.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })
              : null}
          </div>
        </div>
      </section>
    </div>
  )
}