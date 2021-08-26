// import React, { useState } from "react";
// import { USER_REGISTER } from "../graphql";
// import { useMutation } from "@apollo/client";
// import { useHistory } from "react-router-dom";

// export default function Register() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     const history = useHistory();

//     // const { data } = useQuery(ALL_USER_DATA);

//     // console.log(data);

//     const [register] = useMutation(USER_REGISTER, {
//         onCompleted() {
//             history.push("/");
//         },
//         onError(err) {
//             console.log(err);
//         },
//     });

//     const registerHandler = (e) => {
//         e.preventDefault();

//         if (email && password) {
//             const newUser = {
//                 email,
//                 password,
//             };

//             register({
//                 variables: newUser,
//             });
//         } else {
//             console.log("please fill all fields");
//         }
//     };

//     return (
//         <div className="container mx-auto">
//             <div className="flex justify-center px-6 my-12">
//                 <div className="w-full xl:w-3/4 lg:w-11/12 flex">
//                     <div className="w-full h-auto bg-blue-900 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
//                     <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
//                         <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
//                         <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
//                             <div className="mb-4 md:flex md:justify-between">
//                                 <div className="mb-4 md:mr-2 md:mb-0">
//                                     <label className="block mb-2 text-sm font-bold text-gray-700" for="firstName">
//                                         First Name
//                                     </label>
//                                     <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="firstName" type="text" placeholder="First Name" />
//                                 </div>
//                                 <div className="md:ml-2">
//                                     <label className="block mb-2 text-sm font-bold text-gray-700" for="lastName">
//                                         Last Name
//                                     </label>
//                                     <input className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="lastName" type="text" placeholder="Last Name" />
//                                 </div>
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
//                                     Email
//                                 </label>
//                                 <input
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                                     id="email"
//                                     type="email"
//                                     placeholder="Email"
//                                 />
//                             </div>
//                             <div className="mb-4 md:flex md:justify-between">
//                                 <div className="mb-4 md:mr-2 md:mb-0">
//                                     <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
//                                         Password
//                                     </label>
//                                     <input
//                                         onChange={(e) => setPassword(e.target.value)}
//                                         className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
//                                         id="password"
//                                         type="password"
//                                     />
//                                     {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
//                                 </div>
//                                 <div className="md:ml-2">
//                                     <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
//                                         Confirm Password
//                                     </label>
//                                     <input className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="c_password" type="password" />
//                                 </div>
//                             </div>
//                             <div className="mb-6 text-center">
//                                 <button onClick={(e) => registerHandler(e)} className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
//                                     Register Account
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from "react";
import { USER_REGISTER } from "../graphql";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    // const { data } = useQuery(ALL_USER_DATA);

    // console.log(data);

    const [register] = useMutation(USER_REGISTER, {
        onCompleted() {
            history.push("/login");
        },
        onError(err) {
            Swal.fire("Email has been registered");
        },
    });

    const registerHandler = (e) => {
        e.preventDefault();

        if (email && password) {
            const newUser = {
                email,
                password,
            };

            register({
                variables: newUser,
            });
        } else {
            console.log("please fill all fields");
        }
    };

    return (
        <div className="w-screen h-screen bgMytrip ">
            <div className="container mx-auto ">
                <div className="flex justify-center px-6 py-20 ">
                    <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-2xl ">
                        <div className="w-full h-auto bg-register hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"></div>
                        <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Email"
                                    />
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Password
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="password"
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="mb-6 text-center ">
                                    <button onClick={(e) => registerHandler(e)} className="w-90 px-4 py-2  text-white bg-blue-500 rounded-md hover:bg-blue-900 focus:outline-none focus:shadow-outline" type="button">
                                        Register Account
                                    </button>
                                    <button className="w-90 ml-5 px-4 py-2  text-white bg-gray-500 rounded-md hover:bg-gray-900 focus:outline-none focus:shadow-outline" type="button" onClick={() => history.push("/login")}>
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
