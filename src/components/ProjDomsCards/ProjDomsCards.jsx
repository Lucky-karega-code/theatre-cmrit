import React,{useState} from 'react'
import './ProjDomsCards.css'

export default function ProjDomsCards(props) {
    const [toggle, setToggle] = useState(true);

    return (
        <div>
            <span className='domains-card' onClick={()=>setToggle(!toggle)}>
                <h5>
                    {props.title}
                </h5>
                <h6>
                    {props.role}
                </h6>

                {toggle ?
                <>
                    <img src={props.imgUrl} alt="logo" />
                    <p className='view-more'>Click to view more</p>
                </>
                 :
                 <p className='domain-details'>{props.desc}</p>
                }
            </span>
        </div>
    )
}
