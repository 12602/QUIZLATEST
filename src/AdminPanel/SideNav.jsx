import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

import React from "react";
import { useNavigate } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Sidebar
        rootStyles={{
          fontSize: 26,
          height: "100%",
          backgroundColor: "black",
          color: "red",
        }}
        className="sidebar"
      >
        <Menu
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <MenuItem onClick={() => navigate("/admin/addQuiz")}>
            {" "}
            Add New Quiz{" "}
          </MenuItem>
          <MenuItem onClick={() => navigate("/admin/allQuiz")}>
            {" "}
            View All Quiz{" "}
          </MenuItem>

          <MenuItem onClick={() => navigate("/admin/allUsers")}>
            {" "}
            View All Students{" "}
          </MenuItem>

          <MenuItem onClick={() => navigate("/admin")}> Profile</MenuItem>
        </Menu>
      </Sidebar>
      ;
    </>
  );
};

export default SideNav;
