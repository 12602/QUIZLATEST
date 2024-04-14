import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "../UserPanel/Login";
import { UserContext } from "../AppContext/context/UserContext";
import Navbar from "../HomePanel/Navbar";

const AdminProtectedRoute = ({ Component }) => {
  // Add your authentication logic here
  const { user } = useContext(UserContext);
  console.log(user);
  // let isAuthenticated = true; /* Check if user is authenticated */
  if (!Component || !user || user.isAdmin === false) {
    return <Login />;
  } else
    return (
      <>
        <Navbar />
        <Component />
      </>
    );
};

export default AdminProtectedRoute;
