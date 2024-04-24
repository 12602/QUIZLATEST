import React, { useContext, useState } from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { UserContext } from "../AppContext/context/UserContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const { registerHandler } = useContext(UserContext);
  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            className="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="6" className="bg-dark p-3">
          <h4 className="text-center m-3 p-3 heading">Register To Quiziz</h4>
          <MDBInput
            wrapperClass="mb-4"
            label="Enter Name"
            id="formControlLg"
            type="text"
            size="lg"
            name="name"
            value={formData.name}
            onChange={onChange}
            className="bg-white text-danger mt-5"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Enter Email address"
            id="formControlLg"
            type="email"
            size="lg"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="bg-white text-danger"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Enter Password"
            id="formControlLg"
            type="password"
            name="password"
            value={formData.password}
            size="lg"
            onChange={onChange}
            className="bg-white text-danger"
          />

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            onClick={() =>
              registerHandler(formData.name, formData.email, formData.password)
            }
          >
            Register
          </MDBBtn>
          <MDBBtn
            className="mb-4 w-100 bg-success"
            size="lg"
            onClick={() => navigate("/login")}
          >
            Already a User? Login Now
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
