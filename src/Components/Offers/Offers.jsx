import React from 'react'
import './Offers.css'
import exclucsvie from '../Assets/exclusive_image.png' 

const Offers = () => {
  return (
    <div className='offers'>
        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON SELLERS PRODUCTS </p>
            <button>check Now</button>
        </div>
        <div className='offers-right'>
            <img src={exclucsvie} alt=""/>
        </div>
    </div>
  )
}
export default Offers
