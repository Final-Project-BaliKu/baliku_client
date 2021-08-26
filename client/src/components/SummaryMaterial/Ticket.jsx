import React from "react";

export default function Ticket(props) {
    return (
        <div>
            <section className="text-gray-600 body-font flex w-full">
                {props.trip
                    ? props.trip.map((el, idx) => (
                          <div key={idx} className="container px-5 mx-auto pb-10">
                              <div className="-mx-4 -my-8">
                                  <div className="py-8 px-4 ">
                                      <div className="h-full flex items-start">
                                          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                                              <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">No</span>
                                              <span className="font-medium text-lg text-gray-800 title-font leading-none">{idx + 1}</span>
                                          </div>
                                          <div className="flex-grow pl-6">
                                              <h1 className="title-font text-md font-medium text-gray-900 mb-3">{el.name}</h1>
                                              <p className="leading-relaxed mb-5 text-sm">{el.location}</p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      ))
                    : null}
            </section>
        </div>
    );
}
