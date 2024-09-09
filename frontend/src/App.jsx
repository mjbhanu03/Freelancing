import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
<<<<<<< HEAD
import Dashboard from "./Dashboard/Dashboard";
=======
import Home from "./Login/Home";
>>>>>>> 8112ce1 (Fake Data Fetching)

const App = () => {
  const [data, setData] = useState();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
<<<<<<< HEAD
        <Route path="/dashboard" element={<Dashboard />}></Route>
=======
        <Route path="/home" element={<Home />}></Route>
>>>>>>> 8112ce1 (Fake Data Fetching)
      </Routes>
    </Router>
  );
};

export default App;
