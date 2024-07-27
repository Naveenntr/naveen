import React from "react";
import im from "./Project.jpeg"
import pic2 from "./Pic2.jpeg"
import pic3 from "./Pic3.jpeg"

function Project() {
    return (
        <div>
            <div className="mt-14 ml-14 mr-14" >
          <p className="text-amber-950 font-semibold"> These are some of the projects I done in past 2 years in my company where I participated in print-ex exibitions cunducted in Hyderabad , Mumbai & Kerala  where printers & traders will particiate from all over the world  </p>
          </div>
         <div className="min-h-screen mt-24 flex justify-center space-x-28">
                
                <img src={im} className="size-72"   />
                <img src={pic2} className="size-72"   />
                <img src={pic3} className="size-72"   />
           </div>
           </div>

    );
}

export default Project;