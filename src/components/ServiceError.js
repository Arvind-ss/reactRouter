import { useRouteError,Link} from "react-router-dom"
function ServiceError() {
    const error=useRouteError()
  return (
    <div className="container">
        <h1>Error</h1>        
        <h6>{error.message}</h6>
        <Link to='/'><p style={{color:"white"}}>Back to Home Page</p></Link>
    </div>
  )
}

export default ServiceError