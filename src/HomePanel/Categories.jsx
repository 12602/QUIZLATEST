import React, { useState } from "react";
import {
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBRow,
} from "mdb-react-ui-kit";
import Card from "./Card";

const Categories = ({ categories }) => {
  return (
    <div>
      <MDBRow>
        {categories?.map((c, index) => (
          <Card key={index} className="col-md-6" cat={c} />
        ))}
      </MDBRow>
    </div>
  );
};

export default Categories;
