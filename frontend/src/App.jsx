import React from "react";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";

const App = () => {
  return (
    <Browser>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </Browser>
  );
};

export default App;
