import React from "react";
import img from "./Image.png"
function Home() {
  return (
    
    <div className="flex flex items-center  justify-center min-h-screen bg-amber-100">
      <div className="flex flex-row space-x-[200px] flex items-center">
        <img src={img} className="size-96"  />
        <div>
          <h1 className="text-3xl font-semibold"   > Welcome to my page</h1><br /> <br />
          <p className="text-2xl">Hii...<br />
            This is Naveen <br />
            i am a website cordinator <br />
             Do you want to know more about me then please go to about page 
          </p>
        </div>
      </div>
    </div>
    
  );
}

export default Home;