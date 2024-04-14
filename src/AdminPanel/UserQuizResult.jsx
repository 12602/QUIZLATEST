import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import SideNav from "./SideNav";
import { AdminContext } from "../AppContext/context/AdminContext";
import ResultCard from "../Quiz/ResultCard";
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import AdminResultCard from "./AdminResultCard";

const UserQuizResult = () => {
  const { id } = useParams("id");
  const { loadResults, results } = useContext(AdminContext);
  useEffect(() => {
    loadResults(id);
  }, [id]);

  return (
    <MDBRow>
      <MDBCol size={2}>
        <SideNav />
      </MDBCol>
      <MDBCol>
        {results.length > 0 && (
          <div className="text-center">
            <h1 className="    text-white ">Quiz Results</h1>
          </div>
        )}
        <MDBRow className="m-3 text-center d-flex ">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {results.length > 0 ? (
              results?.map((res, index) => (
                <AdminResultCard key={index} result={res} />
              ))
            ) : (
              <div className="bg-success text-white m-3 p-3">
                <h1> You have not taken any Quiz</h1>
              </div>
            )}
          </div>
        </MDBRow>
      </MDBCol>
    </MDBRow>
  );
};

export default UserQuizResult;
