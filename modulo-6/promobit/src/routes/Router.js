import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {HomePage} from "../pages/HomePage";
import {MoviePage} from "../pages/MoviePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/filmes/:idFilme" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}
