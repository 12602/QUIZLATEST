import React from "react";
import SideNav from "./SideNav";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Profile from "../HomePanel/Profile";
import AdminProfile from "./AdminProfile";

const DashBoard = () => {
  return (
    <div className="d-flex">
      <div>
        <SideNav />
      </div>
      <MDBCol className="mt-5">
        <h1 className="text-center heading bg-dark text-white p-3">
          Hello Admin
        </h1>
        <AdminProfile />
      </MDBCol>
    </div>
  );
};

export default DashBoard;
