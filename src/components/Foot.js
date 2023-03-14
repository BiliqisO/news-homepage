import React from "react";

function Foot(props) {
  return (
    
    <div className="foot">
      <img
        src={props.image}
        className="foot-image"
      />
      <div className="r-foot">
        <h1>{props.number}</h1>
        <h4>{props.head}</h4>
        <p>{props.paragraph}</p>
      </div>
    </div>
  
  );
}
export default Foot;
