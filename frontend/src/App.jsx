import React from "react";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";

const App = () => {
  return (
    <Browser>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </Browser>
  );
};

export default App;
