import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from '../_assets/logo.png'

export default function Navbar() {
    let history = useHistory()

    let logout = (e) => {
        e.preventDefault()
        localStorage.clear()
        history.push('/login')
    }


    return (
        <div className="navbar mb-2   text-neutral-content rounded-lg absolute z-40 w-screen  px-20 mt-4">
            <div className="flex-none px-2 mx-2">
                <Link to="/">
                    <div>
                        <img src={logo} alt="logo" className="costumeLogo" />
                        <p className="ml-20 text-3xl">Baliku</p>
                    </div>
                </Link>
            </div>
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch hidden lg:flex"></div>
            </div>
            <div className="flex">
                <Link to="/AllDestinations">
                    <button className="btn  btn-ghost">Destination</button>
                </Link>
                <Link to="/mytrip">
                    <button className="btn  btn-ghost">my Trip</button>
                </Link>
                <a href="/#" onClick={(e) => logout(e)}>
                    <button className="btn  btn-ghost">Logout</button>
                </a>
            </div>
        </div>
    );
}
