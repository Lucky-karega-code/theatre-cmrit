import React from 'react'
import './UnderBuild.css'
import { Link } from 'react-router-dom'

export default function UnderBuild(props) {
  return (
    <>
    <div className='UnderBuild'>
      <h2>
        Contact Us
      </h2>
      {/* <img src={require('../../Assets/Images/uc.png')} alt="under-construction" /> */}
      <p>President - Arniya S : 9611238486</p>
      <p>VP - Samiksha : 8884477321</p>
      <p>Secretary - Lucky : 9329944373</p><p> &nbsp; </p>
      <Link to = '/'>
        <button>Go back to Home</button>
      </Link>
    </div>
    </>
  )
}

UnderBuild.defaultProps = {
  head: "Contact Us"
}
