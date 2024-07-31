import React from "react";

const mainDiv = () =>{
    return(
        <>
        <div style={{
        width:"30%",
        height: "90vh",
        background: "red",
        borderRadius: "15px",
        boxShadow: "0 4px 8px 4px grey"
      }}>
        <div style={{
             width:"100%",
             height: "40%",
             background: "green",
             borderRadius: "6px 6px 0 0",
        }}></div>
        <div style={{
           width:"100%",
           height: "25%",
           background: "yellow",
        }}></div>
        <div style={{
           width:"100%",
           height: "15%",
           background: "violet",
        }}><hr/></div>
        <div style={{
           width:"100%",
           height: "20%",
           background: "blue",
           borderRadius: "0 0 6px 6px",
        }}><hr/>
        </div>
      </div>
        </>
    )
}

export default mainDiv