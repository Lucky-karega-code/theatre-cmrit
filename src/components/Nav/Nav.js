import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";

import "./Nav.css";

export default function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  const hideMenu = ()=>{
    setShowMenu(false);
  }

  return (
    <>
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={require("../../Assets/Logo/club-logo.png")} />
        </Link>
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <Link to='/'>
              <button>HOME</button>
            </Link>
          </li>
          <li>
            <Link to='/events'>
              <button>EVENTS</button>
            </Link>
          </li>
          <li>
            <Link to='/download-app'>
              <button>ACHIVEMENTS</button>
            </Link>
          </li>
          {/* <li>
            <Link to='/team'>
              <button>OUR TEAM</button>
            </Link>
          </li> */}
          <li>
            <Link to='/contact-us'>
              <button>CONTACT US</button>
            </Link>
          </li>
          <li>
          
            <Link to='https://docs.google.com/document/d/1WsnpTUxGmmLMBBxin2acckARyUq81fEgc0XFw-W1pzU/edit?usp=sharing'>
              <button className="register-btn">UPCOMING EVENT REGISTER</button>
            </Link>
          </li>
          {/* <li>
            <Link to='/login'>
              <button className="login-btn">LOGIN</button>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="nav-burger-switch">
        <button onClick={()=>{
          setShowMenu(!showMenu);
        }}>
          {showMenu ? <IoMdClose /> : <HiMenu /> }
        </button>
      </div>
    </div>
    <div className="nav-burger">
        {showMenu ?
          <>
            <div className="burger-menu">
              <ul>
                <li>
                  <Link to='/'>
                    <button onClick={hideMenu}>HOME</button>
                  </Link>
                </li>
                <li>
                  <Link to='/events'>
                    <button onClick={hideMenu}>EVENTS</button>
                  </Link>
                </li>
                <li>
                  <Link to='/download-app'>
                    <button onClick={hideMenu}>Achivements</button>
                  </Link>
                </li>
                {/* <li>
                  <Link to='/team'>
                    <button onClick={hideMenu}>OUR TEAM</button>
                  </Link>
                </li> */}
                <li>
                  <Link to='/underConstruction'>
                    <button onClick={hideMenu}>CONTACT US</button>
                  </Link>
                </li>
                <li>
                  <Link to='https://docs.google.com/document/d/1WsnpTUxGmmLMBBxin2acckARyUq81fEgc0XFw-W1pzU/edit?usp=sharing'>
                    <button className="register-btn" onClick={hideMenu}>UPCOMING EVENT REGISTER</button>
                  </Link>
                </li>
                {/* <li>
                  <Link to='/login'>
                    <button className="login-btn" onClick={hideMenu}>LOGIN</button>
                  </Link>
                </li> */}
              </ul>
            </div>
          </>
          :
          <></>
        }
    </div>
    </>
  );
}
