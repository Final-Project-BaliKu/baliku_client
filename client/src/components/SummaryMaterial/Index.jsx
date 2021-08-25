import React from "react";
import StepSummary from "../Step2.jsx";
import Modal from "../Modal.jsx";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { INSERT_PLANS, ALL_ITINERARY } from "../../graphql/index.js";
import { useMutation, useApolloClient, useQuery } from "@apollo/client";

export default function Index(props) {
    const history = useHistory();
    const client = useApolloClient();

    const { data: allData } = useQuery(ALL_ITINERARY);

    const [insertPlans] = useMutation(INSERT_PLANS, {
        onCompleted(data) {
            console.log(data, 456);

            const { itineraries } = client.readQuery({ query: ALL_ITINERARY });
            itineraries.forEach((el) => {
                if (el._id === localStorage._id) {
                    el = data.insertPlans;
                }
            });

            console.log(itineraries, 123);

            client.writeQuery({
                query: ALL_ITINERARY,
                data: {
                    itineraries: itineraries,
                },
            });
            localStorage.removeItem("_id");
            history.push(`/checkout`);
        },
        onError(err) {
            console.log("masuk error");
            console.log(err);
        },
    });

    const cancel = () => {
        history.push("/dashboard");
    };

    const confirm = (e) => {
        e.preventDefault();

        console.log(JSON.stringify(props.plan), 123);
        console.log(localStorage._id);

        insertPlans({
            variables: {
                _id: localStorage._id,
                plans: JSON.stringify(props.plan),
            },
        });
    };

    const gotoMaps = (e, el) => {
        e.preventDefault();
        history.push("/trip", el);
    };

    return (
        <>
            <StepSummary />
            <div className="mt-10 max-h-72 overflow-scroll example">
                <p>you can check your plan with click the card </p>
                {props.plan
                    ? props.plan.map((el, idx) => (
                          <>
                              <span class="cursor" onClick={(e) => gotoMaps(e, el)}>
                                  <div key={idx} className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{ background: "#f7f7f7" }}>
                                      <h2 className="text-xl font-bold">{el.day}</h2>
                                      <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
                                  </div>
                              </span>
                          </>
                      ))
                    : null}
            </div>
            <button className="btn btn-sm bg-blue-900  rounded mt-10" onClick={(e) => confirm(e)}>
                CONFIRM
            </button>
            <button className="btn btn-sm btn-warning  rounded mt-10 ml-3" onClick={(e) => cancel(e)}>
                CANCEL
            </button>
        </>
    );
}
