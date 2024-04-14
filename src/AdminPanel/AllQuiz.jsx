import React, { useContext, useEffect } from "react";

import { MDBCol, MDBRow } from "mdb-react-ui-kit";

import SideNav from "./SideNav";
import Card from "./Card";
import { toast } from "react-toastify";
import { QuizContext } from "../AppContext/context/QuizContext";

const AllQuiz = () => {
  const { categories, loadAllCat } = useContext(QuizContext);
  useEffect(() => {
    loadAllCat();
    if (categories.length > 0) {
      toast.success("All Category Fetched successfully ");
    } else {
      toast.success("Quiz Category not fetched");
    }
  }, []);
  console.log(categories);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <SideNav />
      </div>

      <MDBRow className="m-2 p-2">
        {categories?.map((c, index) => (
          <Card key={index} className="col-md-6" cat={c} />
        ))}
      </MDBRow>
    </div>
  );
};

export default AllQuiz;
