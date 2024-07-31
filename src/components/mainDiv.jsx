import React from "react";
import ImageComp from "./imageComp";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";


const mainDiv = () =>{
    return(
        <>
        <div style={{
        width:"30%",
        height: "80vh",
        borderRadius: "15px",
        boxShadow: "0 4px 8px 4px grey"
      }}>

        <div className="firstDiv" style={{
             width:"100%",
             height: "40%",
             backgroundImage:`url(${require("../assets/house.jpg")})`,
             borderRadius: "6px 6px 0 0",
        }}> <ImageComp /> </div>

        <div style={{
           width:"100%",
           height: "25%",
        }}>
         <Section1/>
         </div>

        <div style={{
           width:"100%",
           height: "10%",
        }}><hr/>
        <Section2/>
        </div>

        <div style={{
           width:"100%",
           height: "20%",
           background: "#E5E4E2",
           borderRadius: "0 0 6px 6px",
        }}><hr/> <Section3/>
        </div>

      </div>
        </>
    )
}

export default mainDiv