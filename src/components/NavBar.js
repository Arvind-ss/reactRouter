import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'
import './NavBar.css'
import Breadcrumbs from './Breadcrumbs'

function navBar() {
  return (
    <>
        <div className='parent'>
            <p>Routing Component's</p>          
            <NavLink className="link" to="home">Home</NavLink>
            <NavLink className="link" to="about">About</NavLink>
            <NavLink className="link" to="services">Services</NavLink>    
            <NavLink className="link" to="help">Help</NavLink>        
        </div>
        <Breadcrumbs/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default navBar