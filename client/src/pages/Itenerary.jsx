import React, { useState } from "react";
import DragBox from "../components/DragDrop/DragThingsToBoxesDemo.jsx";
import Navbar from "../components/Navbar.jsx";
import { useHistory } from "react-router-dom";

export default function Itenerary() {
    const history = useHistory();

    return (
        <div className="h-full bg-blue-900 relative overflow-hidden pr-10 ">
            <Navbar />
            <section className="text-gray-600 body-font py-5 ml-60 ">
                <div className="container px-10 py-16 mx-auto ">
                    <div className="shadow-xl  mt-auto mb-auto lg:w-full pl-40 sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-10">
                        <DragBox />
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
