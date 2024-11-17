import React from 'react'
import "./AboutUs.css"
import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <div className='AboutUs'>
      <div className='aboutus-text-container-phone'>
        <div className='aboutus-text phone'>
          <h2>
          Welcome to Take a Bow the heart of theatre and creativity at CMRIT ! 
          </h2>
          <p> &nbsp; </p>
          <p>
          We are a passionate community of storytellers, performers, and drama enthusiasts who bring life to the stage through captivating plays, heartfelt monoacts, hilarious improvisations, and more. Our mission is to nurture talent, celebrate creativity, and create a space where art thrives.
          </p>
          <p>
          Whether it’s crafting memorable performances or building lifelong friendships, Take a Bow is where the magic happens. 🌟
          </p><p> &nbsp; </p>
          <h4>
          Join us as we continue to script stories, one act at a time!
          </h4>
          <div className='aboutus-more-container'>
            {/* <Link to='/about-us-more'>
              <button>VIEW MORE</button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className='aboutus-photo'>
        <img src={require("../../Assets/Images/aboutUs.jpg")} alt="group pic" />
      </div>
      <div className='aboutus-text-container'>
        <div className='aboutus-text'>
        <h2>
          Welcome to Take a Bow the heart of theatre and creativity at CMR institute of technology !
          </h2><p> &nbsp; </p>
          <p>
          We are a passionate community of storytellers, performers, and drama enthusiasts who bring life to the stage through captivating plays, heartfelt monoacts, hilarious improvisations, and more. Our mission is to nurture talent, celebrate creativity, and create a space where art thrives.
          </p>
          <p>
          Whether it’s crafting memorable performances or building lifelong friendships, Take a Bow is where the magic happens. 🌟
          </p><p> &nbsp; </p>
          <h4>
          Join us as we continue to script stories, one act at a time!
          </h4>
          <div className='aboutus-more-container'>
            {/* <Link to='/about-us-more'>
              <button>VIEW MORE</button>
            </Link> */}
          </div>
        </div>
      </div>
      <div className='aboutus-head'>
        About us
      </div>
    </div>
  )
}
