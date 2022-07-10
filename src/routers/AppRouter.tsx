import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorScreen } from "../home/components/ErrorScreen";
import { PokeInfo } from "../home/components/PokeInfo";
import { Home } from "../home/Home";

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" element={<PokeInfo />} />
          <Route path="/*" element={<ErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
