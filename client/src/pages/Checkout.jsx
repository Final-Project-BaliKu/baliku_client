import React from 'react';
import Navbar from '../components/Navbar';
import TicketList from '../components/SummaryMaterial/Ticket.jsx';


export default function Checkout() {
  return (
    <div className="h-screen bg-blue-900 relative overflow-x-hidden pr-10 ">
      <Navbar />
      <section className="text-gray-600 body-font py-5 ml-60 ">
        <div className="container px-10 py-16 mx-auto ">
          <div className="shadow-xl  mt-auto mb-5 lg:w-full  sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-2">
            <div className="mx-10">
              <h1 className="text-2xl font-bold  mt-3">DAY 1</h1>
              <div class="divider" />
            </div>
            <TicketList />
          </div>
          <div className="shadow-xl  mt-auto mb-5 lg:w-full  sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-2">
            <div className="mx-10">
              <h1 className="text-2xl font-bold  mt-3">DAY 2</h1>
              <div class="divider" />
            </div>
            <TicketList />
          </div>
          <div className="shadow-xl  mt-auto mb-5 lg:w-full  sm:w-2/3 content-start sm:pr-10 bg-white rounded-md p-2">
            <div className="mx-10">
              <h1 className="text-2xl font-bold  mt-3">DAY 3</h1>
              <div class="divider" />
            </div>
            <TicketList />
          </div>
        </div>
      </section>
    </div>
  )
}
