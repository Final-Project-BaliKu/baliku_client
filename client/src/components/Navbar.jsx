import React from 'react'

export default function Navbar() {
  return (
    <div className="navbar mb-2   text-neutral-content rounded-lg absolute z-40 w-screen  px-20 mt-4">
      <div className="flex-none px-2 mx-2">
        <span className="text-lg font-bold">
          BALIKU
        </span>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          
        </div>
      </div>
      <div className="flex">
        <button className="btn  btn-ghost">
          Destination
        </button>
        <button className="btn  btn-ghost">
          Favorite
        </button>
        <button className="btn  btn-ghost">
          Summary
        </button>
      </div>
    </div>
  )
}
