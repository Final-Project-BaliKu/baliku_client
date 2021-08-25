import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import axios from "axios";
import Loading from "../_assets/loading.gif";

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
            console.log(data);
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
            console.log(data);
            await setAttraction(data);
        });
    };
    useEffect(() => {
        getAllAttraction();
    }, []);

    return (
        <div className="bg-blue-900 relative overflow-hidden">
            <Navbar />
            <section className="text-gray-600 body-font px-20">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Explore Bali</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-white">
                            Bali is an Indonesian island known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs. The island is home to religious sites such as cliffside Uluwatu Temple. To the south, the
                            beachside city of Kuta has lively bars, while Seminyak, Sanur and Nusa Dua are popular resort towns. The island is also known for its yoga and meditation retreats.
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {attraction ? (
                            attraction.map((data) => {
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
                                );
                            })
                        ) : (
                            <img src={Loading} alt="loading.jpeg" />
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
