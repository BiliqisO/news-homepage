import React from "react";

import Right from "./Right";
import Left from './Left';

const data = [
  {
    id: 0,
    head: "Hydrogen VS Electric Cars",
    info: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: 1,
    head: "The Downsides of AI Artistry",
    info: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: 2,
    head: "Is VC Funding Drying Up?",
    info: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function Main() {
    const mapData = data.map(datum => {
        return (
            <Right
                key={datum.id}
                head={datum.head}
                info ={datum.info}
            />
         
        )
    })
    return (
      <div className="main">
        <Left />
        <div className="right">
          
          <h1>New</h1>
          {mapData}
        </div>
      </div>
    );
}
export default Main