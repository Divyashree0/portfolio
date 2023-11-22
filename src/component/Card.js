import "../css/Card.css";
import React from "react";
function Card({Education}){
    return(
        <>
        <div className="primary">
    <div className="edu"> <h3>{Education.h}</h3></div>
     <p>{Education.p}</p>
     </div>
     </>
    );
}
export default Card;
