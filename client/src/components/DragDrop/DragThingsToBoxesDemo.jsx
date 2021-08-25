import React, { useEffect, useState } from 'react';
import Boxable from './Boxable';
import Box from './Box';
import Step from '../Step.jsx';
import './DragThingsToBoxesDemo.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';


export default function SimpleSlide(props) {
  const [attraction, setAttraction] = useState('');
  const [loading, setLoading] = useState('');
  const [countDays, setCountDays] = useState([])
  console.log(props.countBox,'ini lemparan props')

  
  useEffect(() => {
    let tmp = []
    for (let i = 0; i < props.countBox; i++) {
      tmp.push('*')
    }
    setCountDays(tmp)

  }, [])
  
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
        'x-rapidapi-key': 'a89ab4b177msh328f0a2ea32e265p1bab2ajsn9a2a4a563006'
      }
    })
      .then(async ({ data }) => {
        data = data.data.filter(data => {
          return data.photo !== undefined && data.offer_group
        })
        data = data.map(data => {
          return { 
            name: data.name, 
            locationId: data.location_id, 
            location: data.address, 
            latitude: data.latitude, 
            longitude: data.longitude, 
            rating: data.rating, 
            description: data.description, 
            image: data.photo.images.medium.url, 
            ranking: data.ranking,
            // cost: 10 
            cost: data.offer_group.lowest_price.substr(1)
          }
        })
        await setAttraction(data);
      })
  }
  useEffect(() => {
    getAllAttraction()
  }, [])

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: countDays.length > 3 ? 3 : countDays.length,
    swipeToSlide: true,
  };
  return (
    <div>
      <div className="drag_things_to_boxes">
        <Step />
        <div className="things_to_drag ">



          <div className="overflow-scroll max-h-64 example my-10">
            {attraction ? attraction.map(data => {
              return (
                <div className="flex p-2 -ml-10  ">
                  <div className=" w-6/12   overflow-hidden">
                    <Boxable 
                    targetKey="box" 
                    label={data.name}
                    locationId={data.locationId} 
                    location={data.location}
                    latitude={data.latitude}
                    longitude={data.longitude}  
                    rating={data.rating}
                    description={data.description}
                    image={data.image} 
                    ranking={data.ranking} 
                    cost={+data.cost}
                    calculatedCost={props.getCost}
                    />
                  </div>
                  <div className=" w-full px-3">
                    <h1 className="text-lg  font-bold">{data.name}</h1>
                    <p className="mb-3">{data.ranking}</p>
                    <p className="text-justify overflow-y-auto text-sm h-28">{data.description || data.location}</p>
                  </div>
                </div>
              )
            }) : null}
          </div>
        </div>
        <p className="font-bold mb-4">Drag and Drop image to the day box and see your summary</p>
        <div className="boxes">
          {/* box penampung dan props nya */}
          <Slider {...settings}>
            {
              countDays ? 
              countDays.map((el, idx) => (
                <>
                  <Box targetKey="box" name={`Day ${idx + 1}`} description="TESSS"/> 
                </>
              ))
              :
              null
            }
          </Slider>
        </div>
        <div style={{ clear: 'both' }}>&nbsp;</div>
      </div>

    </div>
  );
}