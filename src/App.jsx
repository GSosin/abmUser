import React from "react";
import Home from "./pages/Home"
import CreateUser from "./pages/CreateUserPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/newUser" element={<CreateUser />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
