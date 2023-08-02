import React from 'react'
import { Outlet } from 'react-router-dom'

function Contact() {
  return (
    <>
    
   <h1>Contact Page</h1>
        <div>
            <h1>Name:Alex</h1>
            <h1>Contact Number:9XXXXXX238</h1>
        </div>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Contact