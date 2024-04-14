import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBRipple,
} from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";

const ResultCard = ({ result }) => {
  const [message, setMessage] = useState("");
  const { score, cat } = result;
  const percentage = Math.floor(score * 100) / 10;
  useEffect(() => {
    if (percentage < 50) {
      setMessage("You need more practice");
    } else if (percentage < 80) {
      setMessage("You need little more practice");
    } else if (percentage >= 80) {
      setMessage("Hurray!You are genius");
    }
  }, []);

  return (
    <MDBCol>
      <MDBCard
        style={{ width: 500, backgroundColor: "pink", color: "white" }}
        className="p-3 mt-3 text-center ms-2"
      >
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>Quiz Category:{cat}</MDBCardTitle>
          <hr style={{ height: "1rem", backgroundColor: "pink" }} />
          <MDBCardText>
            {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}

            <h3 style={{ color: " #A9A9A9", fontSize: "2rem" }}>
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
            <h2 className="text-dark">{message}</h2>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
};

export default ResultCard;
