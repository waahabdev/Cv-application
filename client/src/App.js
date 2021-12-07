import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";

// function ProtectedRoute({ component, path, exact }) {
//   if (token) {
//     return <Route path={path} component={component} exact={exact} />;
//   } else {
//     return <Route component={PageLogin} />;
//   }
// }

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/dashboard" element={<ProtectedRoutes />}> 
          {/* Instead of making a child route in protectedROutes we can simply use the above function like
               <ProtectedRoute
                  path="/dashboard"
                  exact
                  element={<Dashboard />}
                />
          */}
            <Route exact path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
