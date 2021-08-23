import React from 'react';
import StepSummary from '../Step2.jsx';
import Modal from '../Modal.jsx';
import { useHistory } from 'react-router-dom'


export default function Index() {
  const history = useHistory()

  const cancel = () => {
    history.push('/dahsboard')
  }

  const confirm = () => {
    history.push('/checkout')
  }

  const gotoMaps = (e) => {
    e.preventDefault()
    history.push('/trip')
  }

  return (
    <>
      <StepSummary />
      <div className="mt-10 max-h-72 overflow-scroll example">
      <p>you can check your plan with click the card </p>
        <span class="cursor" onClick={(e)=> gotoMaps(e)}>
          <div className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{background: '#f7f7f7'}}>
            <h2 className="text-xl font-bold">DAY 1</h2>
            <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
          </div>
          <div className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{background: '#f7f7f7'}}>
            <h2 className="text-xl font-bold">DAY 2</h2>
            <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
          </div>
          <div className="w-full h-3/6 p-10 rounded my-2 shadow-xl relative overflow-hidden" style={{background: '#f7f7f7'}}>
            <h2 className="text-xl font-bold">DAY 3</h2>
            <img src="https://www.kindpng.com/picc/m/248-2488335_liburanbali-header-bali-cartoon-png-transparent-png.png" alt="" className="absolute -right-24 -top-20" width="50%" />
          </div>
        </span>
      </div>
      <button className="btn btn-sm bg-blue-900  rounded mt-10" onClick={confirm}>CONFIRM</button>
      <button className="btn btn-sm btn-warning  rounded mt-10 ml-3" onClick={cancel}>CANCEL</button>
    </>
  )
}
