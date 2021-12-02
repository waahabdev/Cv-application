import React from "react";
import { useNavigate } from "react-router";

const Dashboard = () => {
  let history = useNavigate();
  const removeToken = (e) => {
    localStorage.removeItem("token");
    history("/login");
  };
  return (
    <div className="container mt-5">
      <div>
        <h1>You are logged in</h1>
      </div>
      <div>
        <button onClick={removeToken}>Log out</button>
      </div>
    </div>
  );
};

export default Dashboard;
