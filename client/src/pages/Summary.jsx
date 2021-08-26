import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import SummaryComponents from "../components/SummaryMaterial/Index.jsx";
import { PlansContext } from "../context/plansContext";

export default function Summary() {
    const planValue = useContext(PlansContext);

    const history = useHistory();

    // if(!localStorage.access_token){
    //     return <Redirect to="/login" />
    // }

    useEffect(() => {
        if (!localStorage.access_token) {
            history.push("/login");
        }
    }, []);

    return (
        <div className="h-screen bg-blue-900 relative overflow-hidden pr-10 ">
            <Navbar />
            <section className="text-gray-600 body-font py-5 ml-60 ">
                <div className="container px-10 py-16 mx-auto ">
                    <div className="shadow-xl  mt-auto mb-auto lg:w-full pl-40 sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-10">
                        <SummaryComponents plan={planValue.plans} />
                    </div>
                </div>
            </section>
        </div>
    );
}
