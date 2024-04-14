import React, { useContext } from "react";

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
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../AppContext/context/QuizContext";

const Instruction = ({ modalOpen, setModalOpen }) => {
  const navigate = useNavigate();
  const { selectedCat } = useContext(QuizContext);
  //const [modalOpen, setModalOpen] = useState(true);
  const startQuiz = () => {
    let cat = selectedCat;
    navigate(`/takeQuiz/${cat}`);
  };

  const instructions = [
    "You will encounter many questions in this quiz.",
    "Once you answer a question and move forward, you cannot go back to review or change your answer.",
    "Read each question carefully before selecting your answer.",
    "Click or select the appropriate option to proceed to the next question.",
    "There's  time limit of 30 seconds , so take your time to consider each question.",
    "At the end of the quiz, you'll receive your score based on the number of correct answers.",
    "Enjoy the challenge and have fun!",
  ];
  return (
    <MDBModal tabIndex="-1" open={modalOpen}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle> One-Way Quiz Challenge</MDBModalTitle>
          </MDBModalHeader>
          <MDBModalBody>
            Title: One-Way Quiz Challenge Welcome to the One-Way Quiz Challenge!
            In this quiz, you'll navigate through questions, but there's a
            twist: you can only move forward and cannot revisit previous
            questions. Are you up for the challenge? Let's get started!
          </MDBModalBody>
          <div className="instructions">
            <h3>Instructions</h3>

            {instructions.map((i, index) => (
              <li key={index}>{i}</li>
            ))}
          </div>

          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={startQuiz}>
              Start
            </MDBBtn>
            <MDBBtn onClick={() => setModalOpen(false)}>Back</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
};

export default Instruction;
