import React from "react";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedDouble } from "react-icons/lu";

const section2 = ({bedroom,bathroom}) =>{
    return(
        <>
        <div className="section2">
        <span className="bedroom"><LuBedDouble size={30}/> <span id="num">{bedroom}</span> Bedrooms</span>
        <span className="bathroom"><LiaBathSolid size={30}/>  <span id="num">{bathroom}</span> Bathrooms</span>
        </div>
        </>
    )
}

export default section2