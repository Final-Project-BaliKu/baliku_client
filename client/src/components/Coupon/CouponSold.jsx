import React from 'react'
import './Coupon.css'
import logo from '../../_assets/logo2.png'

export default function CouponSold(props) {
  let { title, checkIn, checkOut, _id } = props.data
  return (
    <div className="container">
      <div className="bp-card" data-clickthrough="link">
        <div className="bp-card_label">
          <div className="bd-border_solid"></div>
          <div className="bd-border_dotted"></div>
        </div>
        <div className="bp-card_content relative overflow-hidden">
          <p className="text-blue-900">
            {checkIn}
            <svg style={{ display: "inline-block", marginRight:10, marginTop:'-4px' }} xmlns="http://www.w3.org/2000/svg" className="mt-2 h-6 w-6 text-blue-600 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            {checkOut}</p>
          <h3 className="text-2xl font-bold">{title}</h3>
          <ul>
            <li>
              <button className="btn  rounded" onClick={(e) => props.delete(_id)}>DELETE</button>
            </li>
            <li>
              BC - Destination 
            </li>
          </ul>
          <img src={logo} alt="" className="absolute top-2  0 -right-3/4" />
        </div>
      </div>
    </div>
  )
}
