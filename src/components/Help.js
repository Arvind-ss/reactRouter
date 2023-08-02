import React from "react";
import "./Help.css";
import { Link, Outlet } from "react-router-dom";
function Help() {
  return (
    <>
      <div className="container">
        <h1>Help Page</h1>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h3>
        <div className="tab">
          <button className="btn btn-btn-outline">
            <Link className="link" to="contact">
              Contact
            </Link>
          </button>

          <button className="btn btn-btn-outline">
            <Link className="link" to="faq">
              FAQ
            </Link>
          </button>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Help;
