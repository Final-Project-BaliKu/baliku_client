import React, { useContext, useState } from "react";
import logo2 from "../_assets/logo2.png";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { POST_ITINERARY, ALL_ITINERARY } from "../graphql";
import { useMutation, useApolloClient, useQuery } from "@apollo/client";
import { PlansContext } from "../context/plansContext";
import Swal from "sweetalert2";

export default function FloatForm() {
    const history = useHistory();
    const planValue = useContext(PlansContext);
    // const informationItenary = useContext(PlansContext)
    const [longTrip, setLongTrip] = useState("");

    const client = useApolloClient();

    const { data: allData } = useQuery(ALL_ITINERARY);

    const [postItinerary] = useMutation(POST_ITINERARY, {
        refetchQueries: [ALL_ITINERARY],
        onCompleted(data) {
            const { itineraries } = client.readQuery({ query: ALL_ITINERARY });

            let newItineraryList = [...itineraries, data.postItinerary];

            client.writeQuery({
                query: ALL_ITINERARY,
                data: {
                    itineraries: newItineraryList,
                },
            });
            localStorage.setItem("_id", data.postItinerary._id);
            history.push(`/itinerary`, longTrip);
        },
        onError(err) {
            Swal.fire("Please check your connection");
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const gotoItenerary = (data) => {
        const date1 = new Date(data.in);
        const date2 = new Date(data.out);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        // console.log(diffTime + " milliseconds");
        // console.log(diffDays + " days");
        // console.log(data.name);
        // console.log(data.in);
        // console.log(data.out);
        let longTrip = diffDays;
        setLongTrip(longTrip);

        planValue.setPlans([]);

        if (data.name && data.in && data.out) {
            const newItinerary = {
                title: data.name,
                checkIn: data.in,
                checkOut: data.out,
            };
            postItinerary({
                variables: newItinerary,
            });
        } else {
            Swal.fire("Please fill all fields");
        }
    };

    return (
        <div>
            <div className="absolute top-2/3 w-4/6  z-10">
                <div className="shadow-md rounded-md p-4 bg-white w-full relative overflow-hidden">
                    <div className="flex justify-end mb-3 text-blue-600 gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            {/* ini dirubah */}
                        </svg>
                    </div>
                    <form onSubmit={handleSubmit(gotoItenerary)}>
                        <div className="flex gap-2 flex-col md:flex-row center">
                            <div className="relative flex-1">
                                <input
                                    id="departure"
                                    name="departure"
                                    type="text"
                                    autoComplete="off"
                                    {...register("name")}
                                    className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:border-2 p-3"
                                    placeholder="quelquechose"
                                />
                                <label
                                    htmlFor="departure"
                                    className="absolute left-2 px-1 -top-2.5 bg-white text-blue-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm"
                                >
                                    Itinerary name :
                                </label>
                            </div>
                            <div></div>
                            <div className="relative flex-1">
                                <input
                                    id="eta"
                                    name="eta"
                                    type="date"
                                    {...register("in")}
                                    className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:border-2 p-3"
                                    placeholder="quelquechose"
                                />
                                <label
                                    htmlFor="eta"
                                    className="absolute left-2 px-1 -top-2.5 bg-white text-blue-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm"
                                >
                                    Check in
                                </label>
                            </div>
                            <div className="relative self-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="mt-2 h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                </svg>
                            </div>
                            <div className="relative flex-1 absolute z-20">
                                <input
                                    id="etd"
                                    name="etd"
                                    type="date"
                                    {...register("out")}
                                    className="peer h-10 w-full border border-1.5 rounded-md border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600 focus:border-2 p-3"
                                    placeholder="quelquechose"
                                />
                                <label
                                    htmlFor="etd"
                                    className="absolute left-2 px-1 -top-2.5 bg-white text-blue-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-900 peer-placeholder-shown:top-2 peer-focus:-top-2.5 peer-focus:text-blue-600 peer-focus:text-sm"
                                >
                                    Check out
                                </label>
                            </div>
                            <div className="relative flex-1">
                                <button type="submit" className="bg-blue-900 text-white text-sm rounded px-6 py-2.5 absolute z-20">
                                    SUBMIT
                                </button>
                            </div>
                        </div>
                    </form>
                    <div style={{ position: "absolute", top: "0", right: "0px", overflow: "hidden", width: "300px", height: "300px" }}>
                        <img src={logo2} alt="" width="100%" />
                    </div>
                </div>
            </div>
        </div>
    );
}
