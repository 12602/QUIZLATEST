import { createContext, useEffect, useState } from "react";

import axios from "axios";
import OpenAI from 'openai';
import { toast } from "react-toastify";
export const QuizContext = createContext();

const OPENAI_API_KEY="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";
const URL="https://latestquizspring-production.up.railway.app/quiz";
const openai = new OpenAI({
  apiKey:OPENAI_API_KEY, dangerouslyAllowBrowser: true // This is the default and can be omitted
});


export const QuizState = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [selectedCat, setSelectedCat] = useState("");
  const [results, setResults] = useState([]);
    const [chatGptResp, setChatGptResp] = useState([]);
  //function to load all the categorys
  const loadAllCat = async () => {
    try {
      const { data } = await axios.get(
        `${URL}/allCategories`,
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
        `${URL}/getQuiz/${cat}`
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
        `${URL}/submitQuiz`,
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
        `https://quizspring.up.railway.app/user/results/${id}`
      );

      setResults(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
      const formatter=(chatGptResp)=>{
        let data=[];
             for(let i=0;i<chatGptResp.length;i=i+2){
               // console.log("Question",chatGptResp[i]);
                //console.log("Answer:",chatGptResp[i+1]);
                data.push({"Question":chatGptResp[i],"Answer":chatGptResp[i+1]});
             }
           return data;
    }
  const chatGpt=async(category)=>{
   
    try 
    {
          const {choices} = await openai.chat.completions.create({
    messages: [{ role: 'user', content: `Please Generate 15 question/facts related to ${category} along with their answers.` }],
  
    model: 'gpt-3.5-turbo',
  });
  
        let textArray = choices[0].message.content.split('\n');
 
         textArray=textArray.filter((t)=>{
          return t.length>0

         });
        
        const response=  formatter(textArray);

       setChatGptResp(response);
   
  toast.success("Questions/Answers feteched Succesfully !!");
        
  
  
        
    } catch (error) {
        console.log(error);
        toast.error("Error in loading questions and answers");
    }
  
   }

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
      chatGpt,
       chatGptResp,
       
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
