import React from 'react'

export default function Step() {
  return (
    <>
      <ul className="w-full steps">
        <li data-content="✓" className="step step-primary">name itenerary</li>
        <li className="step step-primary ">Choose plan</li>
        <li className="step">Sumary</li>
        <li className="step">Finish</li>
      </ul>
    </>
  )
}
