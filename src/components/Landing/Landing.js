import React from 'react';

import "./Landing.css";

export default function Welcome() {
  window.scrollTo(0,0);
  return (
    <div className='landing'>
      <div className='intro'>
          <h1>Take a Bow Productions</h1>
      </div>
      <div className='typing-text'>
        <h3>
          CMR Institute of Technology
        </h3>
      </div>
    </div>
  )
}
