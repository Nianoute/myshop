import React from "react";
import HomePage from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import Item from "../pages/Item";
import Collection from "../pages/Collection";
import OneCollection from "../pages/OneCollection";

const MainRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/items/:id" element={<Item />} />
      <Route path="*" element={<HomePage />} />
      <Route path="/collections" element={<Collection />} />
      <Route path="/collections/:id" element={<OneCollection />} />
    </Routes>
  );
};

export default MainRouter;
