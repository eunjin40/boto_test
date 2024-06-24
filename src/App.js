import React from "react";
import { Route, Routes } from "react-router-dom";
import CardPage from "./pages/CardPage";
import InputPage from "./pages/InputPage";
import { Wrap } from "./styles/basic";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <Wrap>
      <Routes>
        <Route path="/" exact element={<MainPage />}></Route>
        <Route path="/input" exact element={<InputPage />}></Route>
        <Route path="/card" element={<CardPage />}></Route>
      </Routes>
    </Wrap>
  );
};

export default App;
