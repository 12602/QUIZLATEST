import React, { useContext, useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../AppContext/context/UserContext';
import { FaBars } from "react-icons/fa";
const NewNavbar = () => {
  const [expanded, setExpanded] = useState(false);
 const { user } = useContext(UserContext);
  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expanded={expanded} expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Quiziz</Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" >
          <FaBars/>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
             <ul className="navbar-nav">
          {user && user?.isAdmin == false ? (
            <>
              <li className="nav-item active">
                <Link className="nav-link text-white p-2" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white p-2" to="/chatgpt">
                  Learn Now
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;