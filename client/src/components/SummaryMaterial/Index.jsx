import React from "react";
import StepSummary from "../Step2.jsx";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { INSERT_PLANS, ALL_ITINERARY, DELETE_ITINERARY } from "../../graphql/index.js";
import { useMutation, useApolloClient } from "@apollo/client";

export default function Index(props) {
    const history = useHistory();
    const client = useApolloClient();

    // const { data: allData } = useQuery(ALL_ITINERARY);

    const [insertPlans] = useMutation(INSERT_PLANS, {
        onCompleted(data) {
            const { itineraries } = client.readQuery({ query: ALL_ITINERARY });
            itineraries.forEach((el) => {
                if (el._id === localStorage._id) {
                    el = data.insertPlans;
                }
            });

            client.writeQuery({
                query: ALL_ITINERARY,
                data: {
                    itineraries: itineraries,
                },
            });
            localStorage.removeItem("_id");

            let timerInterval;
            Swal.fire({
                title: "enjoy your trip",
                html: "prepare your itinerary <b></b> milliseconds.",
                timer: 1500,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const b = Swal.getHtmlContainer().querySelector("b");
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft();
                    }, 100);
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                }
            });

            history.push(`/checkout`);
        },
        onError(err) {
            console.log("masuk error");
            console.log(err);
        },
    });

    // const [deleteItinerary] = useMutation(DELETE_ITINERARY, {
    //     refetchQueries: [ALL_ITINERARY],
    //     onCompleted() {
    //         console.log("masuk delete");
    //         const { itineraries } = client.readQuery({ query: ALL_ITINERARY });

    //         const itineraryList = itineraries.map((itinerary) => {
    //             return itinerary._id !== localStorage._id;
    //         });

    //         client.writeQuery({
    //             query: ALL_ITINERARY,
    //             data: {
    //                 itineraryList,
    //             },
    //         });
    //         history.push("/");
    //     },
    //     onError(err) {
    //         console.log(err);
    //     },
    // });

    const cancel = (e) => {
        e.preventDefault();
        history.push("/");
    };

    const confirm = (e) => {
        e.preventDefault();

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
                          <div key={idx}>
                              <span className="cursor" onClick={(e) => gotoMaps(e, el)}>
                                  <div key={idx} className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{ background: "#f7f7f7" }}>
                                      <h2 className="text-xl font-bold">{el.day}</h2>
                                      <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
                                  </div>
                              </span>
                          </div>
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
