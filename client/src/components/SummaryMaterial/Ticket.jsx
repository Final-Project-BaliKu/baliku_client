import React from 'react'

export default function Ticket(props) {
  console.log(props.trip,'ini trip')
  return (
    <div>
      <section class="text-gray-600 body-font flex w-full">
        {
          props.trip ?
            props.trip.map((el, idx) => (
              
                <div class="container px-5 mx-auto pb-10">
                  <div class="-mx-4 -my-8">
                    <div class="py-8 px-4 ">
                      <div class="h-full flex items-start">
                        <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                          <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">No</span>
                          <span class="font-medium text-lg text-gray-800 title-font leading-none">{idx + 1}</span>
                        </div>
                        <div class="flex-grow pl-6">
                          <h1 class="title-font text-md font-medium text-gray-900 mb-3">{el.name}</h1>
                          <p class="leading-relaxed mb-5 text-sm">{el.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
            ))
            :
            null
        }
      </section>
    </div>
  )
}
