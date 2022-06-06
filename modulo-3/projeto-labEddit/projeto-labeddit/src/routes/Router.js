import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/LoginPage";
import PostPage from "../Pages/PostsPage";
import SignupPage from "../Pages/SignupPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PostPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
