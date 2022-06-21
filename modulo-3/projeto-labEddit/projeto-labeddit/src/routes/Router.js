import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage } from "../Pages/ErrorPage";
import LoginPage from "../Pages/LoginPage";
import { PostDetailPage } from "../Pages/PostDetailPage";
import PostPage from "../Pages/PostsPage";
import SignupPage from "../Pages/SignupPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<PostPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/signup"} element={<SignupPage />} />
        <Route path={"/post/:postId"} element={<PostDetailPage />} />
        <Route path={"/*"} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
