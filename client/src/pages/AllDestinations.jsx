import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import Loading from "../_assets/loading.gif";
import { Redirect } from "react-router-dom";

export default function AllDestinations() {
    const [attraction, setAttraction] = useState("");
    const getAllAttraction = async () => {
        await axios({
            method: "GET",
            url: "https://travel-advisor.p.rapidapi.com/attractions/list",
            params: {
                location_id: "294226",
                currency: "USD",
                lang: "en_US",
                lunit: "km",
                sort: "recommended",
            },
            headers: {
                "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
                "x-rapidapi-key": "a89ab4b177msh328f0a2ea32e265p1bab2ajsn9a2a4a563006",
            },
        }).then(async ({ data }) => {
            data = data.data.filter((data) => {
                return data.photo !== undefined;
            });
            data = data.map((data) => {
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
                };
            });
            await setAttraction(data);
        });
    };
    useEffect(() => {
        getAllAttraction();
    }, []);

    if(!localStorage.access_token){
        return <Redirect to="/login" />
    }

    return (
        <div className="bgMytrip relative overflow-hidden">
            <Navbar />
            <section className="text-gray-600 body-font px-20 tes">
                <div className="container px-5 py-24 mx-auto ">
                    <div className="flex flex-col text-center w-full mb-20 mt-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Explore Bali</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
                            Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the
                            beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {attraction ? (
                            attraction.map((data, idx) => {
                                return (
                                    <div key={idx} className="lg:w-1/3 sm:w-1/2 p-4">
                                        <div className="flex relative shadow-lg">
                                            <img alt="gallery" className="rounded p-5 bg-white absolute inset-0 w-full h-full object-cover object-center" src={data.image}  />
                                            <div className="px-8 py-10 relative z-10 w-full  bg-yellow-200  opacity-0 px-5 bg-opacity-0 hover:opacity-100  hover:bg-opacity-75 " style={{transition: '0.5s'}}>
                                                <h1 className="title-font text-md font-medium text-gray-900 mb-3 px-5">{data.name}</h1>
                                                <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1 px-5 ">{data.ranking}</h2>
                                                <p className="leading-relaxed overflow-y-auto h-32 text-sm text-justify px-5  ">{data.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="mx-auto">
                                <img src={Loading} alt="loading.jpeg" />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
