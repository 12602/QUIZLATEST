import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../UserPanel/Login";
import { UserContext } from "../AppContext/context/UserContext";
import Navbar from "../HomePanel/Navbar";

const ProtectedRoute = ({ Component }) => {
  // Add your authentication logic here
  const { user } = useContext(UserContext);
  // let isAuthenticated = true; /* Check if user is authenticated */
  if (!Component || !user) {
    return <Login />;
  } else
    return (
      <>
        {/* <Navbar /> */}
        <Navbar/>
        <Component />
      </>
    );
};

export default ProtectedRoute;
