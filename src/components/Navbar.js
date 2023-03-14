import React, { Fragment } from "react";
import logo from "../images/logo.svg"
import menu from "../images/icon-menu.svg"
import menuClose from "../images/icon-menu-close.svg"
import { useState } from "react";
function Navbar(props) {
    
    const [state, setState] = useState(props.open);

    function changeOn(){
        setState(prevState => !prevState)
    }
     const styles = {
        display: state ? "inline" : "none"
     }
    const styleOpen = {
      display: state ? "block" : "none",
    };
    const styleClose = {
      display: state ? "none" : "block",
    };
    return (
        <nav className= "navbar">
            <img src={logo} />
           
        
                <ul className="nav-list"  style={styles}>
                    <li><a href="#"/>Home</li>
                    <li><a href="#"/>New</li>
                    <li><a href="#"/>Popular</li>
                    <li><a href="#"/>Trending</li>
                    <li><a href="#"/>Categories</li>
                    
            </ul>
             <img src={menu} className="menu" style={styleClose} onClick ={changeOn} />
            <img src={menuClose} className="menu-close" style={styleOpen} onClick ={changeOn}  />
            
    
            </nav>
    )
}
export default Navbar
