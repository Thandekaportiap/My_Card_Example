import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const imageComp = () =>{
    const [color, setColor ] = useState("")


    const changeColor = () => {
        setColor( <FaHeart/> )
    }


    return (
        <>
        
            <FaRegHeart size={40} className="icon" onClick={<FaHeart/>}/>
        </>
    )
}

export default imageComp