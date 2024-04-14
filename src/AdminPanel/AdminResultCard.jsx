import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

const AdminResultCard = ({ result }) => {
  const { score, cat } = result;
  const percentage = Math.floor(score * 100) / 10;

  return (
    <MDBCol>
      <MDBCard
        style={{ width: 500, backgroundColor: "grey", color: "white" }}
        className="p-3 mt-3 text-center ms-2"
      >
        <MDBCardBody>
          <MDBCardTitle>
            <h1 className="text-center heading"> Quiz Category:{cat}</h1>
          </MDBCardTitle>
          <hr style={{ height: "1rem", backgroundColor: "pink" }} />
          <MDBCardText>
            {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}

            <h3 style={{ color: "whitesmoke", fontSize: "2rem" }}>
              {" "}
              Total Question:10
            </h3>
            <h3 style={{ color: "#141010", fontSize: "2rem" }}>
              Correct Answer :{score}
            </h3>
            <h3 style={{ color: "#680747", fontSize: "2rem" }}>
              {" "}
              Percentage:{percentage} %
            </h3>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default AdminResultCard;
