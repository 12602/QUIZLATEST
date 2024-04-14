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
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { QuizContext } from "../AppContext/context/QuizContext";

export default function QuizCard({ quiz }) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const { selectedCat, saveResult } = useContext(QuizContext);
  let [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { question, answers, correctAnswer } = quiz[index];

  //next question
  const nextQuestion = (selected) => {
    if (selected === quiz[index].correctAnswer) setScore(score + 1);
    //end quiz
    if (index + 1 === quiz.length) {
      console.log("Your Result is", score);
      navigate("/");
      saveResult(score, selectedCat);
    } else {
      setTimer(30);
      setIndex(index + 1);
    }
  };

  // //for timer countdown

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer((prevSeconds) => prevSeconds - 1);
      }
      if (timer == 0) {
        setIndex(index + 1);
        setTimer(30);
      }
    }, 1000);

    // Clean up the interval when the component unmounts or when the countdown reaches 0
    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <MDBModal className="mt-5 p-5 m-3" tabIndex="-1" open={true}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle> One-Way Quiz Challenge</MDBModalTitle>
            <h3>0:{timer}</h3>
          </MDBModalHeader>

          <MDBModalBody>
            <p>
              {index + 1}. {question}
            </p>
          </MDBModalBody>
          <div className="instructions">
            <MDBRow>
              {answers?.map((i, index) => (
                <MDBCol key={index} className="col-md-6 p-3">
                  <MDBBtn onClick={() => nextQuestion(i)}>{i}</MDBBtn>
                </MDBCol>
              ))}
            </MDBRow>
          </div>

          <MDBModalFooter></MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
