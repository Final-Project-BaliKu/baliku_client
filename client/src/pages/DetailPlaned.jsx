import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { ONE_ITINERARY } from "../graphql/index.js";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Loading from "../_assets/loading.gif";

export default function DetailPlaned() {
    const { id } = useParams();

    const [detail, setDetail] = useState("");

    const { data, loading } = useQuery(ONE_ITINERARY, {
        variables: {
            _id: id,
        },
    });

    // console.log(JSON.parse(data.itinerary.plans));

    console.log(data);

    return (
        <div>
            <section className="text-gray-600 body-font relative overflow-x-hidden bgMytrip h-screen">
                <Navbar />
                <div className="container px-20 py-36 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100 bg-white rounded-lg p-20">
                        <h1 className="text-3xl">Detail my plan</h1>
                    </div>
                    <div>
                        <section class="text-gray-600 body-font flex w-full">
                            {loading ? (
                                <img src={Loading} alt="loading.jpeg" />
                            ) : (
                                JSON.parse(data.itinerary.plans).map((el, idx) => (
                                    <div class="container px-5 mx-auto pb-10">
                                        <div class="-mx-4 -my-8">
                                            <div class="py-8 px-4 ">
                                                <div class="h-full flex items-start">
                                                    <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                        <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Day</span>
                                                        <span class="font-medium text-lg text-gray-800 title-font leading-none">{el.day}</span>
                                                    </div>
                                                    <div class="flex-grow pl-6">
                                                        {el.places.map((el, index) => (
                                                            <div>
                                                                <h1 class="title-font text-md font-medium text-gray-900 mb-3">{el.name}</h1>
                                                                <p class="leading-relaxed mb-5 text-sm">{el.location}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}
