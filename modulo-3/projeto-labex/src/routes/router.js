import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"*"} element={<ErrorPage />} />
        <Route path={"/admin"} element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
