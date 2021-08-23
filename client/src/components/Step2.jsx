import React from 'react'

export default function StepSummary() {
  return (
    <>
      <ul className="w-full steps">
        <li data-content="✓" className="step step-primary">name itenerary</li>
        <li className="step step-primary ">Choose plan</li>
        <li className="step step-primary">Sumary</li>
        <li className="step">Finish</li>
      </ul>
    </>
  )
}
