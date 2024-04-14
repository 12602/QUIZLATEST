import React, { useContext, useEffect, useState } from "react";
import QuizCard from "./QuizCard";
import axios from "axios";
import { useParams } from "react-router-dom";
import { QuizContext } from "../AppContext/context/QuizContext";

const TakeQuiz = ({ match }) => {
  const { questions, loadQuiz } = useContext(QuizContext);
  const { cat } = useParams();
  useEffect(() => {
    loadQuiz(cat);
  }, [cat]);

  return (
    <div>
      {questions.length > 0 ? (
        <QuizCard quiz={questions} />
      ) : (
        <h1>Sorry Error in loading Quiz</h1>
      )}
    </div>
  );
};

export default TakeQuiz;
