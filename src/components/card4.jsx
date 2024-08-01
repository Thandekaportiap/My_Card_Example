import React from "react";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedDouble } from "react-icons/lu";
import Avatar from '../assets/avatar.png'

const card4 = () => {
    return(
        <>
         <div style={{
        width:"20%",
        height: "80vh",
        borderRadius: "15px",
        boxShadow: "0 4px 8px 4px grey",
        marginLeft:"1%"
      }}>
         <div className="firstDiv" style={{
             width:"100%",
             height: "40%",
             backgroundImage:`url(${require("../assets/house.jpg")})`,
             borderRadius: "6px 6px 0 0",
        }}> </div>
        <div className="section1">
        <h4>type age </h4>
        <span>price</span>
        <p>address</p>
        </div>
        <hr/>
        <div className="section2">
        <span className="bedroom"><LuBedDouble size={30}/> <span id="num">2</span> Bedrooms</span>
        <span className="bathroom"><LiaBathSolid size={30}/>  <span id="num">2</span> Bathrooms</span>
        </div>
        <hr/>
        <div>
        <h4 style={{marginBottom:"3%", marginLeft:"2%"}}>REALTOR</h4>
        <img src={Avatar} alt="" className="avatar" />
        <span id="name" className="section3">Tiffany Heffner<br/>
        </span>
        <span className="section3">(555) 555-4321</span>
        </div>
        </div>

        </>
    )
}

export default card4