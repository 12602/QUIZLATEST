import { createContext } from "react";
import App from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const AdminContext = createContext();

export const AdminState = ({ children }) => {
  const [results, setResults] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const saveQuiz = async (quiz) => {
    try {
      const { data } = await axios.post("http://localhost:8080/quiz/addQuiz", {
        quiz,
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadResults = async (id) => {
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
  const loadQuiz = async (cat) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/quiz/getCompleteQuiz/${cat}`
      );
      console.log(data);
      setQuiz(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminContext.Provider
      value={{ saveQuiz, loadResults, results, quiz, loadQuiz }}
    >
      {children}
    </AdminContext.Provider>
  );
};
