import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div className="container">
        <h1>Page Not Found </h1>
        <p>
          Go to <Link to="/">Home</Link>
        </p>
        {/* <button
            className="btn btn-outline-dark mx-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            
          </button> */}
      </div>
    </>
  );
}

export default NotFound;
