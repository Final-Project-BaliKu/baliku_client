import { MapContainer, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { useState } from 'react'
import "leaflet-routing-machine";
import iconStart from '../_assets/marker.png'
import iconEnd from '../_assets/markerFinish.png'
import { createControlComponent } from '@react-leaflet/core'
import { sortByDistance } from '../helper/helper'

export default function Maps(){
    const [latitude, setlatitude] = useState([]);
    const [longtitude, setLongtitude] = useState([]);
    const [waypoint, setWaypoint] = useState([
      {name:'wisata', lat: -8.509518, lng: 115.248919},{name:'wisata', lat: -8.719266, lng: 115.168640},
      {name:'wisata', lat: -8.719266, lng: 115.168640},{name:'wisata', lat: -8.650000, lng: 115.216667},
      {name:'wisata', lat: -8.650000, lng: 115.216667},{name:'wisata', lat: -8.509518, lng: 115.248919},
      {name:'wisata', lat: -8.509518, lng: 115.248919},{name:'wisata', lat: -8.615999, lng: 115.240000}
    ],);

    async function  addWaypoint(e){
        e.preventDefault();
        let newWaypoint = [...waypoint];
        newWaypoint = [...newWaypoint, {name:'wisata', lat: latitude, lng: longtitude}];
        newWaypoint = sortByDistance(newWaypoint);
        await setWaypoint(newWaypoint);
        console.log(waypoint);
    }

    const createRoutineMachineLayer = (props) => {
        const instance = L.Routing.control({
        waypoints: waypoint.map(data =>{
            return L.latLng(data.lat, data.lng)
        }),

        createMarker: function (i, start, n){
            var marker_icon = null;
            if(i == (waypoint.length-1)){
                marker_icon = new L.icon({ // akhir route
                    iconUrl: iconEnd,
                    iconSize:[50, 50],
                    iconAnchor: [25, 50]

                })
            } else if(i > 0) {
                marker_icon = new L.icon({ // route lebih dari 1
                  iconUrl: iconStart,
                  iconSize:[50, 50],
                  iconAnchor: [25, 50]

                })
            } else if(i === 0){ // route awal
                marker_icon = new L.icon({
                    iconUrl: iconStart,
                    iconSize:[50, 50],
                    iconAnchor: [25, 50]
                })
            }
            var marker = L.marker(start.latLng, {
                        icon: marker_icon
                        })
            return marker
        },
        lineOptions: {
            styles: [{className: 'animate'}] // Adding animate class
        },
        show: false,
        autoRoute:true,
        addWaypoints: false,
        routeWhileDragging: true,
        draggableWaypoints: true,
        fitSelectedRoutes: true,
        });
      
        return instance;
    };
    const RoutingMachine = createControlComponent(createRoutineMachineLayer);
    return(
        <>
           
            <MapContainer center={[-8.739184, 115.171127]} zoom={12} scrollWheelZoom={false} style={{height:'500px'}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <RoutingMachine/>
            </MapContainer>
        </>
        
    )
}