import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { ONE_ITINERARY } from "../graphql/index.js";
import { useQuery } from "@apollo/client";
import { Redirect, useParams } from "react-router-dom";
import Loading from "../_assets/loading.gif";

export default function DetailPlaned() {
    const { id } = useParams();


    const { data, loading } = useQuery(ONE_ITINERARY, {
        variables: {
            _id: id,
        },
    });



    if (!localStorage.access_token) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <section className="text-gray-600 body-font relative overflow-x-hidden bgMytrip h-screen">
                <Navbar />
                <div className="container px-20 py-36 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-100 bg-white  rounded-lg p-10">
                        <h1 className="text-3xl mb-3">Detail my plan</h1>
                    
                        <section className="text-gray-600 body-font flex">
                            {loading ? (
                                <img src={Loading} alt="loading.jpeg" />
                            ) : (
                                JSON.parse(data.itinerary.plans).map((el, idx) => (
                                    <div key={idx} className="container px-5 mx-auto pb-10">
                                        <div className="-mx-4 -my-8">
                                            <div className="py-8 px-4 ">
                                                <div className="h-full flex items-start mt-5">
                                                    <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                                        <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Day</span>
                                                        <span className="font-medium text-lg text-gray-800 title-font leading-none">{el.day}</span>
                                                    </div>
                                                    <div className="flex-grow pl-6">
                                                        {el.places.map((el, index) => (
                                                            <div key={index}>
                                                                <h1 className="title-font text-md font-medium text-gray-900 mb-3">{el.name}</h1>
                                                                <p className="leading-relaxed mb-5 text-sm">{el.location}</p>
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
