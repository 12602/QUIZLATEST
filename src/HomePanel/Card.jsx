import React, { useContext, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import Instruction from "./Instruction";
import { QuizContext } from "../AppContext/context/QuizContext";
import Quiz from "../AdminPanel/Quiz";

export default function Card({ cat }) {
  const [toggleOpen, setToogleOpen] = useState(false);
  const { setSelectedCat } = useContext(QuizContext);

  const image = cat?.categoryImage
    ? cat.categoryImage
    : "https://mdbootstrap.com/img/new/standard/nature/111.webp";
  return (
    <MDBCard style={{ width: 400 }} className=" m-3 p-3">
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage src={image} alt="..." height={140} width={140} />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle className="bg-success text-white p-3">
          {cat.category}
        </MDBCardTitle>
        <MDBCardText>
          {/* Some quick example text to build on the card title and make up the
          bulk of the card's content. */}
          {cat.categoryDescription}
        </MDBCardText>

        {toggleOpen ? (
          <Instruction modalOpen={toggleOpen} setModalOpen={setToogleOpen} />
        ) : (
          <MDBBtn
            onClick={() => {
              setToogleOpen(true);
              setSelectedCat(cat.category);
            }}
          >
            Take Now
          </MDBBtn>
        )}
      </MDBCardBody>
    </MDBCard>
  );
}
