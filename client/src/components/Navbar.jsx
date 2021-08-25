import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar mb-2   text-neutral-content rounded-lg absolute z-40 w-screen  px-20 mt-4">
      <div className="flex-none px-2 mx-2">
        <Link to="/">
          <span className="text-lg font-bold">
            BALIKU.COM
          </span>
        </Link>
      </div>
      <div className="flex-1 px-2 mx-2">
        <div className="items-stretch hidden lg:flex">
          
        </div>
      </div>
      <div className="flex">
        <Link to="/AllDestinations">
          <button className="btn  btn-ghost">
            Destination
          </button>
        </Link>
        <Link to="/mytrip">
          <button className="btn  btn-ghost">
            my Trip
          </button>
        </Link>
        <Link to="/login">
          <button className="btn  btn-ghost">
            Logout
          </button>
        </Link>
      </div>
    </div>
  )
}
