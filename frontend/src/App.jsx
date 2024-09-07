import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Axios from 'axios';


const App = () => {
  const [data, setData] = useState();

  const getData = async() => {
    const response = await Axios.get('http://localhost:3000/getData');
    setData(response.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
