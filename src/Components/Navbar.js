import React from "react";
import image from "./Image.png"
import { Link } from "react-router-dom";
import Home from "./Home";
function Navbar() {
    return (
        <div>
            <nav className="flex flex-row bg-sky-400 h-16  space-x-[750px] items-center"> 
                <div className="flex flex-row space-x-5 ml-1.5 items-center">
                    <img src={image} className="size-8"></img>
                    <div>Naveen</div>
                </div>
                
            

                <div className="flex flex-row space-x-5 "> 
                    <Link to="/about">About</Link>
                    <Link to="/Education"> Education</Link>
                    <Link to="/Workexperiance"> Experiance</Link>
                    <Link to="/Project">Projects</Link>
                    <Link to ="/Skills">Skills </Link>
                    <Link to="/">Home</Link>
                </div>
            </nav>
        </div>
    );
  }

  export default Navbar;