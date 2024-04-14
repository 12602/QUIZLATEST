import React, { useContext, useEffect } from "react";
import ResultCard from "./ResultCard";
import { MDBBtn, MDBRow } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../AppContext/context/QuizContext";

const Result = () => {
  const navigate = useNavigate();
  const { loadResults, results } = useContext(QuizContext);
  useEffect(() => {
    loadResults();
  }, [results, loadResults]);
  return (
    <div>
      {results.length > 0 && (
        <h1 className="text-center mt-5 p-3 heading">Your Quiz Result</h1>
      )}
      <MDBRow>
        {results.length > 0 ? (
          results?.map((res, index) => <ResultCard key={index} result={res} />)
        ) : (
          <div className="text-danger p-3 text-center m-3 bg-success">
            <h1 className="text-white"> You have not taken any Quiz</h1>
            <MDBBtn onClick={() => navigate("/")}>Take Quiz</MDBBtn>
          </div>
        )}
      </MDBRow>
    </div>
  );
};

export default Result;
