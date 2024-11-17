import React, { useState } from 'react';
import './ProjDom.css'
import ProjDomsCards from '../ProjDomsCards/ProjDomsCards';

export default function ProjDom() {

  const domainArray=[
    {
      title: "Arniya S",
      role : "President",
      imgUrl: require("../../Assets/Logo/Domain-logo/arniya.jpg"),
      desc: "President of Take a Bow at CMRIT Passionate about theatre, I aim to lead the club to create inspiring performances and a space where creativity shines. Let’s make it unforgettable!"
    },
    {
      title: "Samiksha Shetty",
      role : "Vice-President",
      imgUrl: require("../../Assets/Logo/Domain-logo/samiksha.jpg"),
      desc: "Vice President of Take a Bow at CMRIT With a passion for theatre, I’m here to support the club’s creative journey and ensure every event runs smoothly. I’m excited to work with the team and bring out the best in all our performances!"
    },
    {
      title: "Lucky Dadlani ",
      role : "Secretary",
      imgUrl: require("../../Assets/Logo/Domain-logo/lucky.jpg"),
      desc: "Secretary Take a Bow at CMRIT. Passionate about theatre, I’m here to help organize fun events and support our performers. Let’s create something unforgettable together!"
    }
  ];

  return (
    <div className='ProjDom'>
      <div className='projDom-head'>
        Club Heads
      </div>
      <div className='projDoms-domains'>
      {
        domainArray.map(domainArray => (
          <ProjDomsCards title={domainArray.title} role={domainArray.role} imgUrl={domainArray.imgUrl} desc={domainArray.desc}/>
          ))
      } 
      </div>
        
    </div>
  )
}
