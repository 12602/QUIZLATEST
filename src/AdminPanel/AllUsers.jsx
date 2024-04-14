import React, { useContext, useEffect } from "react";

import { MDBTable, MDBTableHead, MDBTableBody, MDBCol } from "mdb-react-ui-kit";
import SideNav from "./SideNav";
import UserTable from "./UserTable";
import { toast } from "react-toastify";
import { UserContext } from "../AppContext/context/UserContext";
const AllUsers = () => {
  const { getAllUsers, allUsers } = useContext(UserContext);
  useEffect(() => {
    try {
      getAllUsers();
      toast.success("All Users fetched successfully");
    } catch (error) {
      toast.error("User not fetched ");
    }
  }, []);

  console.log(allUsers);
  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideNav />
      </div>
      <MDBCol className="mt-3">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr className="bg-danger text-white">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Quiz Attempted</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
            {allUsers?.map((user) => (
              <UserTable key={user.userId} user={user} />
            ))}
          </MDBTableBody>
        </MDBTable>
      </MDBCol>
    </div>
  );
};

export default AllUsers;
