import React from 'react'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import './Services.css'

function Services() {
 
  const services=useLoaderData()
  return (
    <>
    <h1>Services</h1>
      <div className="container">
        {services.map(services=>{
          return(
             <div className='container'key={services.id}>              
          <Link className='servicesTitle' style={{color:"black"}} 
            to={services.id.toString()} >
            <p>{services.title}</p>
            <p>{services.location}</p>
          </Link>
          </div>)
 } )}
      </div>
    <Outlet/>
    </>
  )
}
//services.loader
export const servicesLoader =async()=>{
  const res=await fetch('  http://localhost:4000/services')
  if (!res.ok) {
    throw Error("Could not fetch the Services.....");
  }
  return res.json()
}

export default Services



