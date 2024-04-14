import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const QuizContext = createContext();

export const QuizState = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [results, setResults] = useState([]);
  //function to load all the categorys
  const loadAllCat = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/quiz/allCategories",
        {}
      );
      setCategories(data);
    } catch (error) {
      console.log("error");
    }
  };

  //function to load the quiz

  const loadQuiz = async (cat) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/quiz/getQuiz/${cat}`
      );
      console.log(data);
      setQuestions(data);
    } catch (error) {
      console.log(error);
    }
  };

  //function to save the results
  const saveResult = async (score, category) => {
    try {
      const userId = localStorage.getItem("userId");
      console.log(userId);

      console.log(category);
      const { data } = await axios.post(
        "http://localhost:8080/quiz/submitQuiz",
        {
          userId,
          score,
          category,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  //function to load the results of the user
  const loadResults = async () => {
    const id = localStorage.getItem("userId");
    try {
      const { data } = await axios.get(
        `http://localhost:8080/user/results/${id}`
      );

      setResults(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <QuizContext.Provider
      value={{
        categories,
        selectedCat,
        setSelectedCat,
        questions,
        saveResult,
        loadResults,
        results,
        loadAllCat,
        loadQuiz,
        questions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
