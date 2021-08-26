import React, {useContext} from "react";
import Maps from "../components/Maps.jsx";
import { Redirect, useHistory, useLocation } from "react-router-dom";
import { PlansContext } from "../context/plansContext";

export default function DetailTrip() {
    const history = useHistory();
    let location = useLocation();
    const planValue = useContext(PlansContext);
    const {places} = planValue.plans.find((el) => el.day === location.state.day)


    const back = () => {
        history.push("/summary");
    };

    if(!localStorage.access_token){
        return <Redirect to="/login" />
    }
    
    return (
        <div>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg max-h-96  sm:mr-10 flex items-end justify-start relative overflow-hidden">
                        <Maps location={places} day={location.state.day}/>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-3xl mb-5">{location.state.day} Trip</h2>
                        <ul>
                            {places
                                ? places.map((el, idx) => (
                                      <div key={idx}>
                                          <li >
                                              {idx + 1}. {el.name}
                                          </li>
                                      </div>
                                  ))
                                : null}
                        </ul>
                    </div>
                </div>
                <button className="btn btn-success rounded ml-20" onClick={back}>
                    BACK
                </button>
            </section>
        </div>
    );
}
