import React from 'react'
import { Outlet } from 'react-router-dom'
import './Faq.css'
function Faq() {
  return (
    <> <div className='head'>
     <p>
  <a className="btn btn-outline-dark" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Why Extraa
  </a>
  <button className="btn btn-outline-dark mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    How to contact Extraa
  </button>
</p>
<div className="collapse" id="collapseExample">
  <div className="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div>
</div>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default Faq