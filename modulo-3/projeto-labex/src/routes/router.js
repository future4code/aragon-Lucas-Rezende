import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import DetailPage from "../pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/admin"} element={<AdminPage />} />
        <Route path={"/admin/trips/:id"} element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
