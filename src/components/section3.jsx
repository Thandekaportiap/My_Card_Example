import React from "react";
import Avatar from '../assets/avatar.png'

const section3 = () =>{
    return(
        <>

        <h4 style={{marginBottom:"3%", marginLeft:"2%"}}>REALTOR</h4>
        <img src={Avatar} alt="" className="avatar" />
        <span id="name" className="section3">Tiffany Heffner<br/>
        </span>
        <span className="section3">(555) 555-4321</span>
        </>
    )
}

export default section3