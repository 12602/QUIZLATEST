import React, { useContext, useEffect } from "react";

import { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import { AdminContext } from "../AppContext/context/AdminContext";
export default function ViewQuiz() {
  const [index, setIndex] = useState(0);
  const { cat } = useParams();
  const navigate = useNavigate();
  const { loadQuiz, quiz } = useContext(AdminContext);

  useEffect(() => {
    loadQuiz(cat);
  }, []);

  if (quiz.length == 0) return <h1>Loading Quiz</h1>;

  const { question, answers, correctAnswer } = quiz[index];
  console.log(quiz);
  //next question
  const nextQuestion = () => {
    //end quiz
    if (index + 1 === quiz.length) {
      navigate("/");
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <MDBModal className="mt-5 p-5 m-3" tabIndex="-1" open={true}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle> One-Way Quiz Challenge</MDBModalTitle>
          </MDBModalHeader>

          <MDBModalBody>
            <p>
              {index + 1}. {question}
            </p>
          </MDBModalBody>
          <div className="instructions">
            <MDBRow>
              {answers?.map((i, index) => (
                <MDBCol key={i} className="col-md-6 p-3">
                  <h6>{i}</h6>
                </MDBCol>
              ))}
              <div className="text-center mt-3">
                <MDBBtn
                  style={{ width: "10vw" }}
                  className="text-center"
                  onClick={nextQuestion}
                >
                  Next
                </MDBBtn>
              </div>
            </MDBRow>
          </div>

          <MDBModalFooter></MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
