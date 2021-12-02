import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home.js";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<ProtectedRoutes />}>
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
