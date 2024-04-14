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
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { toast } from "react-toastify";
import { AdminContext } from "../AppContext/context/AdminContext";
import { QuizContext } from "../AppContext/context/QuizContext";

export default function Quiz() {
  const [index, setIndex] = useState(0);

  const { selectedCat } = useContext(QuizContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
    category: "",
  });
  const [quiz, setQuiz] = useState([]);
  const [openQuiz, setOpenQuiz] = useState(true);
  const { saveQuiz } = useContext(AdminContext);
  const nextQuestion = () => {
    if (index === 10) {
      let cat = prompt("Enter Quiz Category");
      console.log(cat);
      for (let i = 0; i < quiz.length; i++) quiz[i].category = cat;
      //function to save the quiz
      saveQuiz();
      setOpenQuiz(false);
      toast.success("Quiz save successfully");
      navigate("/admin");
    } else {
      const correct = currentQuestion.correctAnswer;
      const { question, option1, option2, option3, option4, correctAnswer } =
        currentQuestion;
      if (question.length < 5) {
        toast.warn("Question must be of 5 words");
        return;
      }
      if (
        option1.length === 0 ||
        option2.length === 0 ||
        option3.length === 0 ||
        option4.length === 0 ||
        correctAnswer.length === 0
      ) {
        toast.warn("Option can't be empty");
        return;
      }
      const option = [option1, option2, option3, option4];
      for (let i = 0; i < 4; i++) {
        for (let j = i + 1; j < 4; j++) {
          if (option[i] == option[j]) {
            toast.warn("Two options can not be the same");
            return;
          }
        }
      }
      if (
        option1 === correct ||
        option2 === correct ||
        option3 === correct ||
        option4 === correct
      ) {
        toast.success("Question save successfully");
        setQuiz([...quiz, currentQuestion]);
        setIndex(index + 1);
      } else {
        toast.warn("Correct Answer not matched with any answer");
      }
    }
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCurrentQuestion({ ...currentQuestion, [name]: value });
  };

  return (
    <MDBModal className="mt-2 p-5 m-3" tabIndex="-1" open={true}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle> One-Way Quiz Challenge</MDBModalTitle>
          </MDBModalHeader>
          <MDBModalBody></MDBModalBody>
          <div className="instructions p-4">
            <MDBRow className="mt-2">
              <MDBCol size={4}>
                <span>Question {index + 1}:</span>
              </MDBCol>
              <MDBCol>
                <textarea
                  style={{ width: "100%" }}
                  placeholder="Enter Question description"
                  name="question"
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-2">
              <MDBCol size={4}>
                <span>Option 1.</span>
              </MDBCol>
              <MDBCol>
                <input
                  type="text"
                  placeholder="option1"
                  name="option1"
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-2">
              <MDBCol size={4}>
                <span>Option 2.</span>
              </MDBCol>
              <MDBCol>
                <input
                  type="text"
                  placeholder="option2"
                  name="option2"
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-2">
              <MDBCol size={4}>
                <span>Option 3.</span>
              </MDBCol>
              <MDBCol>
                <input
                  type="text"
                  placeholder="option3"
                  name="option3"
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>
            <MDBRow className="mt-2">
              <MDBCol size={4}>
                <span>Option 4.</span>
              </MDBCol>
              <MDBCol>
                <input
                  type="text"
                  placeholder="option4"
                  name="option4"
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow className="mt-2">
              <MDBCol size={4}>
                <span>Correct Answer:</span>
              </MDBCol>
              <MDBCol>
                <input
                  type="text"
                  placeholder="Correct Answer"
                  name="correctAnswer"
                  onChange={handleChange}
                />
              </MDBCol>
            </MDBRow>
            <div className="text-center mt-3">
              <MDBBtn
                onClick={() => {
                  nextQuestion();
                }}
              >
                NEXT Question
              </MDBBtn>
            </div>
          </div>

          <MDBModalFooter></MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal>
  );
}
