import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const imageComp = () =>{

    // const [color, setColor ] = useState("white")
    // const changeColor = (e) => {
    //     setColor( "red" )
    // };

    const [ isLiked, setIsLiked ] = useState(false);
    const handleIsLiked = () => {
        setIsLiked(true)
    }

    let iconColor = "red";

    const changeLike = () => {
       
        if(isLiked){
            {handleIsLiked}
            iconColor ="white"
            console.log("liked")
        } if(!isLiked)
           {handleIsLiked}
            iconColor = "red"
            console.log("not liked")
    }

    return (
        <>
             <FaRegHeart size={40} className="icon" style={{color:iconColor}} onClick={changeLike}/>

            {/* <FaRegHeart size={40} className="icon" style={{color:color}} onClick={changeColor}/> */}
        </>
    )
}

export default imageComp