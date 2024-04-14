import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ProtectedRoute from "./Routes/ProtectedRoute";

import DashBoard from "./AdminPanel/DashBoard";
import AddQuiz from "./AdminPanel/AddQuiz";
import AllQuiz from "./AdminPanel/AllQuiz";
import AllUsers from "./AdminPanel/AllUsers";
import UserQuizResult from "./AdminPanel/UserQuizResult";
import AdminProtectedRoute from "./Routes/AdminProtectedRoute";
import ViewQuiz from "./AdminPanel/ViewQuiz";
import Login from "./UserPanel/Login";
import Register from "./UserPanel/Register";
import Profile from "./HomePanel/Profile";
import Home from "./HomePanel/Home";
import Navbar from "./HomePanel/Navbar";
import Instruction from "./HomePanel/Instruction";
import Result from "./Quiz/Result";
import Quiz from "./AdminPanel/Quiz";
import TakeQuiz from "./Quiz/TakeQuiz";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<ProtectedRoute Component={Home} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/result" element={<ProtectedRoute Component={Result} />} />
        <Route
          path="/instruction"
          element={<ProtectedRoute Component={Instruction} />}
        />
        <Route
          path="/profile"
          element={<ProtectedRoute Component={Profile} />}
        />
        <Route
          path="/takeQuiz/:cat"
          element={<ProtectedRoute Component={TakeQuiz} />}
        />
        <Route
          path="/admin"
          element={<AdminProtectedRoute Component={DashBoard} />}
        />
        <Route
          path="/admin/addQuiz"
          element={<AdminProtectedRoute Component={AddQuiz} />}
        />
        <Route
          path="/admin/allQuiz"
          element={<AdminProtectedRoute Component={AllQuiz} />}
        />
        <Route
          path="/admin/allUsers"
          element={<AdminProtectedRoute Component={AllUsers} />}
        />
        <Route
          path="/admin/getResultById/:id"
          element={<AdminProtectedRoute Component={UserQuizResult} />}
        />
        <Route
          path="/admin/openQuiz/:cat"
          element={<AdminProtectedRoute Component={ViewQuiz} />}
        />
      </Routes>
    </div>
  );
}

export default App;
