import React, { useState} from "react";
import axios from 'axios'
import { useNavigate } from 'react-router';


const Login = () => {
  let navigate = useNavigate();
 

  const [email, setemail] = useState({
    email: ""
  });
  const [password, setpassword] = useState({
    password: ""
  });
  
function isAuthenticated(){
 return sessionStorage.getItem('token') 
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


  const handleSubmit = async (e) =>{
    e.preventDefault()
    
    axios.post('http://localhost:5000/users/login', email, password)
    .then(res => {
      localStorage.setItem('token', res.data.token)

    
     if(isAuthenticated){ 
      navigate('/dashboard')
     }
    
    })
    .catch(err => {
      console.log(err)
    
    })


  }
  

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
