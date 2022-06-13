import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { goToLogin } from "../routes/coordinator";
import { PostCard } from "../components/PostCard";
import GlobalContext from "../global/GlobalContext";
import axios from "axios";
import { Url } from "../constants/urls";
import styled from "styled-components";

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: Gainsboro;
`;

const Div = styled.div`
  background-color: Gainsboro;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  text-align: center;
`;

const Section2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: 360px;
`;

const Button = styled.button`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  font-size: 1em;
  font-weight: 600;
  height: 7vh;
  border-radius: 10px;
  margin: 2%;

  &:hover {
    background-color: orange;
    color: white;
    text-shadow: 1px 1px 2px black;
  }
`;

export default function PostPage() {
  const [form, setForm] = useState({
    title: "",
    body: "",
  });
  const { getters, states, setters } = useContext(GlobalContext);

  const { setPage } = setters;

  const { getPosts } = getters;

  const { posts, page } = states;

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
  }, [posts]);

  const showPosts =
    posts.length &&
    posts.map((post) => {
      return <PostCard key={post.id} post={post} isFeed={true} />;
    });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      goToLogin(navigate);
    }
  }, []);

  const changePage = (num) => {
    const nextPage = page + num;

    setPage(nextPage);
    getPosts(nextPage);
  };

  return (
    <Div>
      <Header />

      <Section>
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
          <label htmlFor="texto">Texto:</label>
          <textarea
            id="texto"
            name="body"
            value={form.body}
            onChange={onChangeBody}
            pattern={"^.{10,}$"}
            title={"O texto deve ter no mínimo 10 caracteres"}
            required
          />
          <br />
          <Button>criar post</Button>
        </form>
      </Section>
      <Section2>
        {page !== 1 && (
          <Button onClick={() => changePage(-1)}>Voltar página</Button>
        )}
        <h3> Página {page} </h3>
        {posts.length && (
          <Button onClick={() => changePage(1)}>Próxima página</Button>
        )}
      </Section2>
      <hr />
      <Article>{showPosts}</Article>
    </Div>
  );
}
