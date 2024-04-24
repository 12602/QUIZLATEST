import { createContext } from "react";
import App from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const AdminContext = createContext();
const URL="https://quizspring.up.railway.app/quiz";
export const AdminState = ({ children }) => {
  const [results, setResults] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const saveQuiz = async (quiz) => {
    try {
      const { data } = await axios.post(`${URL}/addQuiz`, {
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
        `https://quizspring.up.railway.app//user/results/${id}`
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
        `${URL}/getCompleteQuiz/${cat}`
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
