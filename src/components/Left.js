import React from "react";
import webd from "../images/image-web-3-desktop.jpg";

function Left() {
    return (
      <div className="left">
        <img src={webd} />
        <div className="bottom">
          <h1 className="b-left" >The Bright Future of Web 3.0?</h1>
          <div className="b-right" >
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className="btn">READ MORE</button>
          </div>
        </div>
      </div>
    );
}
export default Left