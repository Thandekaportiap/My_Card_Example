import React from "react";
import Avatar from '../assets/avatar.png'

const section3 = ({name,phone}) =>{
    return(
        <>

        <h4 style={{marginBottom:"3%", marginLeft:"2%"}}>REALTOR</h4>
        <img src={Avatar} alt="" className="avatar" />
        <span id="name" className="section3">{name}<br/>
        </span>
        <span className="section3">{phone}</span>
        </>
    )
}

export default section3