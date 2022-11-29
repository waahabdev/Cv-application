import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
  let navigate = useNavigate();

  // Instead of making an object and then setting a string 
  // you could simply make a string like below
  // const [email, setemail] = useState("");
  const [email, setemail] = useState({
    email: "",
  })
  // Same goes here
  const [password, setpassword] = useState({
    password: "",
  });

  function isAuthenticated() {
    return localStorage.getItem("token");
  }

  const handleChange = (e) => {
    setemail({
      ...email,
      [e.target.name]: e.target.value,
    });
    setpassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Instead of making axios request direct from the component we should create a service called authService and deal all of these things there.
    axios
      .post(process.env.REACT_APP_URL + "users/login", email, password)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("firstname", res.data.user.firstname); //Why do we need to save firstname lastname separately? Can't we get it from user data we're setting in the localStorage
        localStorage.setItem("lastname", res.data.user.lastname);
        localStorage.setItem("user", res.data.user);

        if (isAuthenticated) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login align-items-center d-flex justify-content-center container">
      <div className="card">
        <div className="m-5 ">
          <div className="d-flex justify-content-center mb-3">
            <i className="login-person far fa-user"></i>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
