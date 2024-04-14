import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import Categories from "./Categories";
import axios from "axios";

import DashBoard from "../AdminPanel/DashBoard";
import { UserContext } from "../AppContext/context/UserContext";
import { QuizContext } from "../AppContext/context/QuizContext";
const Home = () => {
  const { categories, loadAllCat } = useContext(QuizContext);
  const { user } = useContext(UserContext);
  useEffect(() => {
    loadAllCat();
  }, []);

  console.log(categories);
  return (
    <>
      {user.isAdmin === true ? (
        <DashBoard />
      ) : (
        <div className="text-center mt-5">
          {categories.length > 0 && (
            <h4 className="text-danger bg-secondary p-2">
              Select your Favorite Category
            </h4>
          )}
          {categories.length > 0 ? (
            <Categories categories={categories} />
          ) : (
            <div className="bg-secondary text-danger p-3">
              <h1>There is no Quiz Available</h1>
              <h3>Please add Quiz First/Asked your Teachers for it</h3>{" "}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
