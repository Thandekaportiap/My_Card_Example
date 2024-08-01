import React from "react";
import ImageComp from "./imageComp";
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";


const mainDiv = ({accommodation}) =>{
console.log(accommodation.price)

    return(
        <>
        <div style={{
        width:"25%",
        height: "80vh",
        borderRadius: "15px",
        boxShadow: "0 4px 8px 4px grey"
      }}>

        <div className="firstDiv" style={{
             width:"100%",
             height: "40%",
             backgroundImage:`url(${require(accommodation.image)})`,
             borderRadius: "6px 6px 0 0",
             display:"flex", 
             padding: " 4%  0 4% 0" ,   
        }}> <ImageComp /> </div>

        <div style={{
           width:"100%",
           height: "25%",
        }}>
         <Section1 price={accommodation.price}  type={accommodation.type} age={accommodation.age} address={accommodation.address}/>
         </div>

        <div style={{
           width:"100%",
           height: "10%",
        }}><hr/>
        <Section2 bathroom={accommodation.bathrooms} bedroom={accommodation.bedrooms} />
        </div>

        <div style={{
           width:"100%",
           height: "20%",
           background: "#E5E4E2",
           borderRadius: "0 0 6px 6px",
        }}><hr/> <Section3 name={accommodation.realtorName} phone={accommodation.realtorPhone}/>
        </div>

      </div>
        </>
    )
}

export default mainDiv