import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin } from "../routes/coordinator";
import { Url } from "../constants/urls";
import axios from "axios";
import moment from "moment";

export default function PostPage() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });

  const [posts, setPosts] = useState([]);

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

  const getPosts = () => {
    axios
      .get(`${Url}/posts?page=1&size=10`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

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
          required
        />
        <br />
        <label htmlFor="texto">Texto do post:</label>
        <input
          id="texto"
          name="body"
          value={form.body}
          onChange={onChangeBody}
          required
        />
        <br />
        <button>criar post</button>
      </form>
      <hr />
      {posts.map((post) => (
        <div Key={post.id}>
          <h2>{post.title}</h2>
          <p>
            <b>Autor:</b>
            {post.userId}
          </p>
          <p>
            <b>Criado em:</b>
            {moment.utc(post.createdAt).format("DD/MM/YYYY")}
          </p>
          <img
            src={"https://picsum.photos/200/300?random=" + post.id}
            alt="Imagem aleatória do post"
          />
          <p>
            <b>Descrição:</b>
            {post.body}
          </p>
          {/* {voteSum ? voteSum : 0}
           */}
          <p>Votos: 0</p>
          <button>Não Gostei</button>
          <button>Gostei</button>
          {/* {commentCount ? commentCount : 0} */}
          <p>Comentários: 0</p>
          <button>comentários</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
