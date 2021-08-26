import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import TicketList from "../components/SummaryMaterial/Ticket.jsx";
import { PlansContext } from "../context/plansContext";

export default function Checkout() {
    const planValue = useContext(PlansContext);
    const history = useHistory();

    // if(!localStorage.access_token){
    //     return <Redirect to="/login" />
    // }

    useEffect(() => {
        if (!localStorage.access_token) {
            history.push("/login");
        }
    });

    return (
        <div className="h-screen bg-blue-900 relative overflow-x-hidden pr-10 ">
            <div className="mb-32">
                <Navbar />
            </div>
            {planValue.plans
                ? planValue.plans.map((el, idx) => (
                      <div key={idx}>
                          <section className="text-gray-600  body-font py-2 ml-60 ">
                              <div className="container px-10  mx-auto ">
                                  <div className="shadow-xl  mt-auto  lg:w-full  sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-2">
                                      <div className="mx-10">
                                          <h1 className="text-2xl font-bold  mt-3">{el.day}</h1>
                                          <div className="divider" />
                                      </div>
                                      <TicketList trip={el.places} />
                                  </div>
                              </div>
                          </section>
                      </div>
                  ))
                : null}
        </div>
    );
}
