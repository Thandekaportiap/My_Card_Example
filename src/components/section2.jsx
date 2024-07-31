import React from "react";
import { LiaBathSolid } from "react-icons/lia";
import { LuBedDouble } from "react-icons/lu";

const section2 = () =>{
    return(
        <>
        <div className="section2">
        <span className="bedroom"><LuBedDouble size={30}/> <span id="num">3</span> Bedrooms</span>
        <span className="bathroom"><LiaBathSolid size={30}/>  <span id="num">2</span> Bathrooms</span>
        </div>
        </>
    )
}

export default section2