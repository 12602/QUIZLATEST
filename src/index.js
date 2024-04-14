import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";
import { UserState } from "./AppContext/context/UserContext";
import { AdminState } from "./AppContext/context/AdminContext";
import { QuizState } from "./AppContext/context/QuizContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserState>
      <QuizState>
        <AdminState>
          <App />
        </AdminState>
      </QuizState>
    </UserState>
  </BrowserRouter>
);
