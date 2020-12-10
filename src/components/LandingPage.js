import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage(props) {
  return (
    <div className='landingPage'>
      <div className='contentdiv'>
        <h1>Price Watcher</h1>
        <p>
          A tool to help you buy items in your wishlist at the price that you are comfortable with.
        </p>
        <div className="landingbuttonsdiv">
          <button className='landingbtn btn' >
            <Link to ='/login' >Login/Signup</Link>
            </button>
        </div>
      </div>
    </div>
  )
}
