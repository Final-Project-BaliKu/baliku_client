import { useEffect, useState, useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import iconStart from "../_assets/marker.png";
import iconEnd from "../_assets/markerFinish.png";
import { createControlComponent } from "@react-leaflet/core";
import { sortByDistance } from "../helper/helper";
import { PlansContext } from "../context/plansContext";

export default function Maps(props) {
    const planValue = useContext(PlansContext);
    const [waypoint, setWaypoint] = useState([
        { name: "wisata", lat: -8.509518, lng: 115.248919 },
        { name: "wisata", lat: -8.719266, lng: 115.16864 },
        { name: "wisata", lat: -8.719266, lng: 115.16864 },
        { name: "wisata", lat: -8.65, lng: 115.216667 },
        { name: "wisata", lat: -8.65, lng: 115.216667 },
        { name: "wisata", lat: -8.509518, lng: 115.248919 },
        { name: "wisata", lat: -8.509518, lng: 115.248919 },
        { name: "wisata", lat: -8.615999, lng: 115.24 },
    ]);

    useEffect(() => {
        let tmp = [];
        props.location.map((el) => {
            tmp.push({ ...el, name: el.name, lat: el.latitude, lng: el.longitude });
        });
        // tmp = sortByDistance(tmp)
        setWaypoint(tmp);
    }, []);

    async function optimize() {
        await setWaypoint([]);
        let newWaypoint = sortByDistance(waypoint)
        await setWaypoint(newWaypoint);

        let newPlans = planValue.plans.map((el) => {
            if (el.day === props.day) {
                return {
                    day: el.day,
                    places: newWaypoint 
                }
            } else {
                return el
            }
        })

        planValue.setPlans(newPlans);


    }

    const createRoutineMachineLayer = (props) => {
        const instance = L.Routing.control({
            waypoints: waypoint.map((data) => {
                return L.latLng(data.lat, data.lng);
            }),

            createMarker: function (i, start, n) {
                var marker_icon = null;
                if (i == waypoint.length - 1) {
                    marker_icon = new L.icon({
                        // akhir route
                        iconUrl: iconEnd,
                        iconSize: [50, 50],
                        iconAnchor: [25, 50],
                    });
                } else if (i > 0) {
                    marker_icon = new L.icon({
                        // route lebih dari 1
                        iconUrl: iconStart,
                        iconSize: [50, 50],
                        iconAnchor: [25, 50],
                    });
                } else if (i === 0) {
                    // route awal
                    marker_icon = new L.icon({
                        iconUrl: iconStart,
                        iconSize: [50, 50],
                        iconAnchor: [25, 50],
                    });
                }
                var marker = L.marker(start.latLng, {
                    icon: marker_icon,
                });
                return marker;
            },
            lineOptions: {
                styles: [{ className: "animate" }], // Adding animate class
            },
            show: false,
            autoRoute: true,
            addWaypoints: false,
            routeWhileDragging: true,
            draggableWaypoints: true,
            fitSelectedRoutes: true,
        });

        return instance;
    };
    const RoutingMachine = createControlComponent(createRoutineMachineLayer);
    return (
        <>
            <MapContainer center={[-8.739184, 115.171127]} zoom={12} scrollWheelZoom={false} style={{ height: "500px", position: "relative", zIndex: 10 }}>
                <TileLayer attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <RoutingMachine />
            </MapContainer>
            <button className="btn btn-sm bg-blue-900 rounded mx-5" type="button" onClick={optimize} style={{ position: "absolute", right: 0, bottom: 20, zIndex: 20 }}>
                Optimize Path
            </button>
        </>
    );
}
