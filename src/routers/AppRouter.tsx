import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokeInfo } from "../home/components/PokeInfo";
import { Home } from "../home/Home";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<PokeInfo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
