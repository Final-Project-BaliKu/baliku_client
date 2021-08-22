import React from 'react';
import StepSummary from '../Step2.jsx';
import Modal from '../Modal.jsx'


export default function Index() {
  return (
    <>
      <StepSummary />
      <div className="mt-10 max-h-72 overflow-scroll example">
      <p>you can check your plan with click the card </p>
        <a href="/">
          <div className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{background: '#f7f7f7'}}>
            <h2 className="text-xl font-extrabold">DAY 1</h2>
            <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
          </div>
          <div className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{background: '#f7f7f7'}}>
            <h2 className="text-xl font-extrabold">DAY 2</h2>
            <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
          </div>
          <div className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{background: '#f7f7f7'}}>
            <h2 className="text-xl font-extrabold">DAY 3</h2>
            <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
          </div>
        </a>
      </div>
      <button className="btn bg-blue-900  rounded mt-10 ">CONFIRM</button>
      <button className="btn btn-warning  rounded mt-10 ml-3 ">CANCEL</button>
    </>
  )
}
