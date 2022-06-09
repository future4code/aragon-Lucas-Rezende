import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin } from "../routes/coordinator";
import { PostCard } from "../components/PostCard";
import GlobalContext from "../global/GlobalContext";
import axios from "axios";
import { Url } from "../constants/urls";

export default function PostPage() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const { getters, states } = useContext(GlobalContext);

  const { getPosts } = getters;

  const { posts } = states;

  const navigate = useNavigate();

  const onChangeTitle = (e) => {
    setForm({ ...form, ["title"]: e.target.value });
  };

  const onChangeBody = (e) => {
    setForm({ ...form, ["body"]: e.target.value });
  };

  const createPost = (e) => {
    e.preventDefault();
    axios
      .post(`${Url}/posts`, form, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Post criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  const showPosts =
    posts.length &&
    posts.map((post) => {
      return <PostCard key={post.id} post={post} isPosts={true} />;
    });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, []);

  return (
    <div>
      <Header />
      <h2>Crie um novo post:</h2>

      <form onSubmit={createPost}>
        <label htmlFor="titulo">Título:</label>
        <input
          id="titulo"
          name="title"
          value={form.title}
          onChange={onChangeTitle}
          pattern={"^.{5,}$"}
          title={"O título deve ter no mínimo 5 caracteres"}
          required
        />
        <br />
        <label htmlFor="texto">Texto do post:</label>
        <input
          id="texto"
          name="body"
          value={form.body}
          onChange={onChangeBody}
          pattern={"^.{10,}$"}
          title={"O texto deve ter no mínimo 10 caracteres"}
          required
        />
        <br />
        <button>criar post</button>
      </form>
      <hr />
      {showPosts}
    </div>
  );
}
