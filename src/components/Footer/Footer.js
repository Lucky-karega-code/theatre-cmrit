import React from 'react'
import './Footer.css'
import { IconContext } from 'react-icons'
import { CiFacebook, CiInstagram, CiLinkedin, CiYoutube } from 'react-icons/ci'
import { BiLogoDiscordAlt } from 'react-icons/bi'
import { DiGithubBadge } from 'react-icons/di'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-form'>
          <p className='footer-form-head'>Let's connect!</p>
          <p className='footer-form-line'>If you are thinking or interested in joining the club or want to know more about us, connect with us by dropping your Email-ID with us. We will be glad to get in touch with you.</p>
          <form>
              <input className='input-email' type="email" name="email" placeholder="Type your e-mail here..." />
              <input className='input-submit' type="submit" name="submit" />
          </form>
        </div>
        <div className='footer-cj'>
            <img src={require('../../Assets/Logo/club-logo.png')} alt="club-logo" />
            <h3>Theater Club</h3>
            <p>A club by Students of CMRIT.</p>
            <p>Copyright &copy; 2024</p>
            <p style={{ margin:"auto", marginTop: "1rem", padding: "auto"}}>Made By - Monu-Kumar <a href="https://www.linkedin.com/in/monu-kumar-0627a6237/" target="_blank" >
                  <span><CiLinkedin /></span>
                </a></p>
        </div>
        <div className='footer-soc'>
          <p className='footer-text-socials'>Connect with Us</p>
          <div className='footer-icon-container'>
              <IconContext.Provider value={{ className: 'footer-icons', style: {shadow: '0 0 10px red'} }}>
                {/* <a href=" # " target="_blank" >
                  <span></span>
                </a> */}
                <a href="https://www.instagram.com/take_a_bow_productions/?hl=en" target="_blank" >
                  <span><CiInstagram /></span>
                </a>
                {/* <a href=" # " target="_blank" >
                  <span></span>
                </a> */}
                {/* <a href=" # " target="_blank" >
                  <span></span>
                </a>
                <a href=" # " target="_blank" >
                  <span></span>
                </a>
                <a href=" # " target="_blank" >
                  <span></span>
                </a> */}
              </IconContext.Provider>
          </div>
          <div className='archive'>
            {/* <Link to='/archives'>
              <button>&gt;&gt; Archives</button>
            </Link> */}
          </div>
        </div>
    </div>
  )
}
