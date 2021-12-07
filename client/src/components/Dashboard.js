import React from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  let history = useNavigate();
  const removeToken = () => { //Instead of "removeToken" the function name should be relevant to it action like "logout" or "onLogout"
    localStorage.clear();
    history("/");
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-around">
        <div className="card">
          <h1>You are logged in!</h1>
        </div>

        <div>
          <button className="btn btn-info" onClick={removeToken}>
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
