import React from "react";
import ima from "./Mypic.jpeg"


function About() {
  return (

    <div className=" bg-gray-200 min-h-screen" >
      <div className=" text-center mt-0.2 " >
        <img src={ima} className="size-72 h-80 ml-[34rem] mb-1 rounded-full" />
        <p className="text-amber-950 font-semibold ">Hi, I’m Naveen from Bangalore. I graduated from Dayananda University in the 2021 batch. After graduation, I started working in marketing, and now I am focusing on becoming a full-stack developer</p>

      </div>
    </div>

  );
}

export default About;
