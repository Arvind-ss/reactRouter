import { Link, useLocation } from 'react-router-dom'
import "./Breadcrumbs.css"
function Breadcrumbs() {
    
    const location=useLocation()
    let currentLink="";
    const crumbs=location.pathname.split("/").filter(crumb =>crumb!=="").map((crumb,index)=>{currentLink+=`/${crumb}`   
    return(
            <div className='crumb'>
                <Link to={currentLink} key={index}>{crumb}</Link>
            </div>
        )
    })
  return (
    <div className='breadCrumbs' >
        {crumbs}
    </div>
  )
}

export default Breadcrumbs