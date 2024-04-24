import { createContext } from "react";
import App from "../../App";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const UserContext = createContext();
const URL="https://quizspring.up.railway.app/user";
export const UserState = ({ children }) => {
  const notify = (msg) => toast(msg);
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const loginHandler = async (email, password) => {
    if (email.indexOf("@") === -1 || email.size < 5) {
      toast.warn("Email must contain @");
      return;
    }
    if (password.length < 5) {
      toast.warn("Password must be of 6 digits");
      return;
    }
    try {
      const {data} = await axios.post(`${URL}/login`, {
        email,
        password,
      });
         
      console.log(data);

      if (!data) 
      {
        toast.error("Incorrect email/password");
        return;
      }
    
      notify("Login Successfully");
      localStorage.setItem("userName", data.userName);
      localStorage.setItem("userId", data.userId);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/");
    } catch (error) {
      notify("Error in Login");
      console.log("error");
    }
  };

  const registerHandler = async (userName, email, password) => {
    try {
      if (userName.length < 3) {
        toast.warn("Name must be of 3 leeters");
        return;
      }
      if (email.indexOf("@") === -1 || email.size < 5) {
        toast.warn("Email must contain @");
        return;
      }
      if (password.length < 5) {
        toast.warn("Password must be of 6 digits");
        return;
      }

      const { data } = await axios.post(`${URL}/register`, {
        userName,
        email,
        password,
      });
      console.log(data);
      notify("Register Successfully");
      navigate("/login");
    } catch (error) {
      notify("Error in Register");
      console.log("error");
    }
    console.log(userName, email, password);
  };
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${URL}/allUsers`);

      setAllUsers(data);
    } catch (error) {
      toast.error("No Users found");
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser("");
    toast.success("Logout Sucessfully");
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{
        loginHandler,
        registerHandler,
        logout,
        user,
        getAllUsers,
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
