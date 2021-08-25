import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { useHistory } from "react-router-dom";
import { ALL_ITINERARY, DELETE_ITINERARY } from "../graphql/index";
import { useQuery, useMutation, useApolloClient } from "@apollo/client";
import Loading from "../_assets/loading.gif";

export default function MyTrip() {
    let history = useHistory();
    const client = useApolloClient();

    const [idItinerary, setIdItinerary] = useState("");

    const { data: allData, loading } = useQuery(ALL_ITINERARY);
    console.log(allData);

    const [deleteItinerary] = useMutation(DELETE_ITINERARY, {
        onCompleted(data) {
            console.log(data);

            const { itineraries } = client.readQuery({ query: ALL_ITINERARY });
            // console.log(movies);

            const itineraryList = itineraries.map((itinerary) => {
                return itinerary._id !== idItinerary;
            });

            client.writeQuery({
                query: ALL_ITINERARY,
                data: {
                    itineraryList,
                },
            });

            history.push("/");
        },
        onError(err) {
            console.log(err);
        },
    });

    let detailHistory = (e, id) => {
        e.preventDefault();
        // console.log(id);
        history.push(`/planned/${id}`);
    };

    const deleteHandler = (e, el) => {
        e.preventDefault();

        setIdItinerary(el._id);
        deleteItinerary({
            variables: {
                _id: el._id,
            },
        });
    };

    return (
        <section className="text-gray-600 h-screen body-font relative overflow-x-hidden bgMytrip">
            <Navbar />
            <div className="container px-20 py-36 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100 bg-white rounded-lg p-20">
                    <h1 className="text-3xl mb-3">My Trip</h1>
                    {loading ? (
                        <img src={Loading} alt="loading.jpg" />
                    ) : (
                        <div>
                            {allData.itineraries.map((el, index) => (
                                <div className="py-8 flex flex-wrap md:flex-nowrap">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700">Journey {index + 1}</span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{el.title}</h2>
                                        <span className="mt-1 text-gray-500 text-sm">{el.checkIn} </span>
                                        <svg style={{ display: "inline-block" }} xmlns="http://www.w3.org/2000/svg" className="mt-2 h-6 w-6 text-blue-600 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                        </svg>
                                        <span className="mt-1 text-gray-500 text-sm ml-5">{el.checkOut} </span>
                                        <br />
                                        <a className="text-indigo-500 inline-flex items-center mt-4 cursor" onClick={(e) => detailHistory(e, el._id)}>
                                            See Detail
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                        <button type="button" onClick={(e) => deleteHandler(e, el)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
