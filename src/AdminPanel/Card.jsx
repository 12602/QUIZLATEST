import React, { useContext, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBCol,
} from "mdb-react-ui-kit";

import { useNavigate } from "react-router-dom";
import { QuizContext } from "../AppContext/context/QuizContext";

export default function Card({ cat }) {
  const [toggleOpen, setToogleOpen] = useState(false);
  const { setSelectedCat } = useContext(QuizContext);
  const navigate = useNavigate();
  const openQuiz = (selected) => {
    navigate(`/admin/openQuiz/${selected}`);
  };
  return (
    <MDBCol>
      <MDBCard style={{ width: 300, height: 200 }} className="mt-3 text-center">
        <MDBRipple
          rippleColor="light"
          rippleTag="div"
          className="bg-image hover-overlay"
        >
          {/* <MDBCardImage
            src="https://mdbootstrap.com/img/new/standard/nature/111.webp"
            fluid
            alt="..."
            height={140}
            width={140}
          /> */}
          <a>
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
            ></div>
          </a>
        </MDBRipple>
        <MDBCardBody>
          <MDBCardTitle>
            <span>Quiz category</span>
            <h3>{cat}</h3>
          </MDBCardTitle>
          <MDBCardText>
            {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
            <MDBBtn onClick={() => openQuiz(cat)}>View Questions</MDBBtn>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  );
}
