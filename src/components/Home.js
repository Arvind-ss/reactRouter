import React, { useState } from "react";
import "./Home.css";
import { Navigate } from "react-router-dom";
function Home() {
  const [out,setOut]=useState("admin")
  if(!out){
    return <Navigate to="/" />
  }

  return (
    <>
      <div className="container">
        <h1>Welcome to Home Page</h1>
        <p>
          Your homepage is an essential tool for your business and often serves
          as the first impression to potential customers. There are many
          important components of effective web design, like white space, font
          selection, color schemes, and layout, but the core of a website is its
          content, not its design. Within a matter of seconds, your homepage
          needs to introduce your product or service and entice visitors to
          explore your site further.
        </p>
        <span>
          <button onClick={()=>setOut(null)} style={{border:"2px solid #FAB516",borderRadius:"5px",backgroundColor:"#FAB516"}}>Logout</button>
        </span>
      </div>
    </>
  );
}

export default Home;
