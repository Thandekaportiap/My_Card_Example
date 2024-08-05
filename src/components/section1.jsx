import React from "react";

const section1 = ({price,type,age,address}) =>{
    // console.log(price)

    return(
        <>
        <div className="section1">
        <h4>{type} {age} </h4>
        <span>{price}</span>
        <p>{address}</p>
        </div>
        </>
    )
}

export default section1