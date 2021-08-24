import React, { useEffect, useState } from "react";
import FormItenerary from "../components/FloatForm.jsx";
import Navbar from "../components/Navbar.jsx";
import ContentHome from "../components/ContentHome.jsx";
import vid from "../_assets/vid.mp4";
import axios from "axios";

export default function Home() {
    // const [attraction, setAttraction] = useState("");
    // const getAllAttraction = async () => {
    //     await axios({
    //         method: "GET",
    //         url: "https://travel-advisor.p.rapidapi.com/attractions/list",
    //         params: {
    //             location_id: "294226",
    //             currency: "USD",
    //             lang: "en_US",
    //             lunit: "km",
    //             sort: "ranking",
    //             limit: "10",
    //         },
    //         headers: {
    //             "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    //             "x-rapidapi-key": "6ce005067cmsh3fcf85adc75f757p1c39fcjsn3c484155bae8",
    //         },
    //     }).then(async ({ data }) => {
    //         data = data.data.filter((data) => {
    //             return data.photo !== undefined;
    //         });
    //         console.log(data);
    //         data = data.map((data) => {
    //             return {
    //                 name: data.name,
    //                 locationId: data.location_id,
    //                 location: data.address,
    //                 latitude: data.latitude,
    //                 longitude: data.longitude,
    //                 rating: data.rating,
    //                 description: data.description,
    //                 image: data.photo.images.medium.url,
    //                 ranking: data.ranking,
    //                 ranking_position: data.ranking_position,
    //             };
    //         });
    //         console.log(data);
    //         await setAttraction(data);
    //     });
    // };
    // useEffect(() => {
    //     getAllAttraction();
    // }, []);

    return (
        <div>
            <div className=" h-screen flex relative overflow-hidden">
                <div className="w-4/12 bg-blue-900 absolute z-10 h-screen">
                    <div className="container px-20 mt-5 mx-auto ">
                        <div className="title relative top-56 ">
                            <h1 className="text-4xl text-white mainTitle">Baliku.</h1>
                            <h1 className="text-3xl text-white">Gate to discover</h1>
                            <h1 className="text-3xl text-white">the real Bali.</h1>
                        </div>
                    </div>
                </div>

                <div className="px-20">
                    <FormItenerary />
                </div>
                <Navbar />
                <div className="w-screen bg-black backgroundC">
                    <div className="absolute md:bg-gradient-to-b from-white to-900 opacity-75 inset-0 z-0">
                        <video autoPlay muted loop id="myVideo">
                            <source src={vid} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
            {/* <div className="px-20">{attraction ? <ContentHome attraction={attraction} /> : null}</div> */}
        </div>
    );
}
