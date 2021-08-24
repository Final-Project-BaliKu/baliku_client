import React, { useState } from "react";
import logo from "../_assets/logo.png";
import patternBali from "../_assets/catur.png";
import { useHistory } from "react-router-dom";
import { USER_LOGIN } from "../graphql";
import { useMutation } from "@apollo/client";

export default function Login() {
    const history = useHistory();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [login] = useMutation(USER_LOGIN, {
        onCompleted(data) {
            localStorage.setItem("access_token", data.login.token);
            history.push("/dashboard");
        },
        onError(err) {
            console.log(err);
        },
    });

    const enter = (e) => {
        // localStorage.setItem('access_token','yes');
        e.preventDefault();
        // console.log(email, password, 216653276);

        if (email && password) {
            const userLogin = {
                email,
                password,
            };
            // console.log("dalam if");

            login({
                variables: userLogin,
            });
        } else {
            console.log("please fill all fields");
        }
    };

    return (
        <>
            <div className="bg-no-repeat bg-cover bg-center relative loginBackgroundPage">
                <div className="absolute md:bg-gradient-to-b from-white to-red-900 opacity-75 inset-0 z-0"></div>
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <h1 className="mb-3 font-bold text-5xl">
                                Hi <img src={logo} alt="img" style={{ width: 80, display: "inline-block" }} /> Welcome to baliKu{" "}
                            </h1>
                            <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-lg w-100 relative overflow-hidden">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
                                <p className="text-gray-500">Please sign in to your account.</p>
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                        type=""
                                        placeholder="mail@gmail.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">Password</label>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                                        type="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input name="remember_me" type="checkbox" className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded" />
                                        <label className="ml-2 block text-sm text-gray-800">Remember me</label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="/home" className="text-blue-900 hover:text-blue-500">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        onClick={(e) => enter(e)}
                                        className="w-full flex justify-center bg-blue-900  hover:bg-blue-500 text-gray-100 p-3  rounded tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © 2021-2022
                                    <a href="https://codepen.io/uidesignhub" rel="" title="Ajimon" className="text-blue hover:text-blue-500 ">
                                        BALIKU
                                    </a>
                                </span>
                            </div>
                            <div className="absolute -left-0.5 opacity-70 mt-1">
                                <img src={patternBali} alt="" className="" width="50%" />
                            </div>
                            <div className="absolute left-1/2 opacity-70 mt-1">
                                <img src={patternBali} alt="" className="" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
