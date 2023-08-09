import React from "react";
import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";

const Navbar = () => {
  const cookies = new Cookies();

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">SM</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <ol className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <i className='bx bx-home' ></i>
                  <span>Home</span>
                </NavLink>
              </ol>
              <ol className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  <i className='bx bxs-book'></i>
                  <span>Department</span>
                </NavLink>
              </ol>
            </ul>

            <ul className="nav navbar-nav ml-auto">
              <div>
                {cookies.get("isLogin") ? (
                  ""
                ) : (
                  <ol className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to="/Register">
                      <i className='bx bxs-user-circle'></i>
                      <span>Register</span>
                    </NavLink>
                  </ol>
                )}
              </div>

              {/* login logout toggle */}
              {cookies.get("isLogin") ? (
                <ol className="nav-item">
                  <NavLink className="nav-link " to="/logout">
                    <span className="fas fa-sign-in-alt "></span> Logout
                  </NavLink>
                </ol>
              ) : (
                <ol className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/Login">
                    <i className='bx bxs-user-plus' ></i>
                    <span>LOGIN</span>
                  </NavLink>
                </ol>
              )}

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;



