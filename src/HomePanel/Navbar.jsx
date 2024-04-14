import React, { useContext, useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { UserContext } from "../AppContext/context/UserContext";

export default function Navbar() {
  const [openNavRight, setOpenNavRight] = useState(false);
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark myNavbar fixed-top">
      <Link className="navbar-brand ms-5 " to="/">
        Quizzer
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          {user && user?.isAdmin == false ? (
            <>
              <li className="nav-item active">
                <Link className="nav-link text-white p-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white p-2" to="/result">
                  My Results
                </Link>
              </li>
              <li>
                {" "}
                <Link className="nav-link text-white p-2" to="/profile">
                  {user.userName}
                </Link>
              </li>
            </>
          ) : user.isAdmin == true ? (
            <Link className="text-white" to="/admin">
              Admin:{user.userName}
            </Link>
          ) : (
            <>
              <li>
                {" "}
                <Link className="nav-link text-white p-2" to="/login">
                  Login
                </Link>
              </li>{" "}
              <li>
                {" "}
                <Link className="nav-link text-white p-2" to="/register">
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
