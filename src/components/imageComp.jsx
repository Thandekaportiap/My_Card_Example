import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const imageComp = () =>{
    const [color, setColor ] = useState("black")


    const changeColor = (event) => {
        event.prevent
        setColor( "red" )
    }


    return (
        <>
        
            <FaHeart size={40} className="icon" style={{color:color}} onClick={changeColor}/>
        </>
    )
}

export default imageComp