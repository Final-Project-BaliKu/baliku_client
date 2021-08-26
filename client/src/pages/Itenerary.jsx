import React, { useState, useEffect } from "react";
import DragBox from "../components/DragDrop/DragThingsToBoxesDemo.jsx";
import Navbar from "../components/Navbar.jsx";
import { Redirect, useHistory, useLocation } from "react-router-dom";

export default function Itenerary() {
    let [cost, setCost] = useState(0);
    const history = useHistory();
    let loc = useLocation();

    let nyoba = (data) => {
        setCost((cost += data));
    };

    useEffect(() => {
        document.body.style.overflowX = 'hidden'
    }, [])


    if(!localStorage.access_token){
        return <Redirect to="/login" />
    }


    return (
        <div className="h-full bg-blue-900 w-screen  overflow-x-hidden  ">
            <Navbar />
            <div className="bg-white rounded shadow-2xl  h-32 w-56 fixed ml-40 border-8 border-green-500" style={{ top: 400 }}>
                <p className="text-lg font-bold text-center py-2">Total costs</p>
                <h1 className="text-center mt-2 text-4xl">$ {cost.toFixed(2)}</h1>
            </div>
            <section className="text-gray-600 body-font py-5 ml-60 pr-10 ">
                <div className="container px-10 py-16 mx-auto ">
                    <div className="shadow-xl  mt-auto mb-auto lg:w-full pl-40 sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-10">
                        <DragBox countBox={loc.state} getCost={(data) => nyoba(data)} />
                        <p className="mb-5">make sure you has completed all trip</p>
                        <button className="btn btn-black rounded text-right" onClick={() => history.push("/summary")}>
                            CONTINUE
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
