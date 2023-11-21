import React from "react";
import HomePage from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Item from "../pages/Item";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items/:id" element={<Item />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default MainRouter;
