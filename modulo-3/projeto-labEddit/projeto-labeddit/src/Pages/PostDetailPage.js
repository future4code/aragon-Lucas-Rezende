import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { CommentCard } from "../components/CommentCard";
import { Url } from "../constants/urls";
import GlobalContext from "../global/GlobalContext";
import { goBack } from "../routes/coordinator";
import img from "../image/logo.png";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  background-color: Gainsboro;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  width: 400px;
  text-align: center;
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

export function PostDetailPage(props) {
  const [form, setForm] = useState({ body: "" });

  const navigate = useNavigate();

  const params = useParams();

  const { states, setters } = useContext(GlobalContext);

  const { setPostComments } = setters;

  const { post, postComments } = states;

  const getPostComments = (id) => {
    const header = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    axios
      .get(`${Url}/posts/${id}/comments`, header)
      .then((res) => {
        setPostComments(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    getPostComments(params.postId);
  }, [postComments]);

  const onChangeBody = (e) => {
    setForm({ ...form, ["body"]: e.target.value });
  };

  const createComment = (event) => {
    event.preventDefault();
    axios
      .post(`${Url}/posts/${params.postId}/comments`, form, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        alert("Comentário criado com sucesso");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showComments = postComments.length ? (
    postComments.map((comment) => {
      return <CommentCard key={comment.id} comment={comment} />;
    })
  ) : (
    <p>Não há comentários para este post. Seja a primeira pessoa a comentar!</p>
  );

  return (
    <Div>
      <img src={img} alt="logo do site" height="100px" />
      <hr />
      <Button onClick={() => goBack(navigate)}>Voltar</Button>
      <Article>
        <h2>Informações do Post</h2>
        <PostCard key={post.id} post={post} isFeed={false} />

        <section>
          <h2>Escreva seu comentário</h2>
          <form onSubmit={createComment}>
            <label htmlFor={"body"}> Comentário: </label>
            <textarea
              id={"body"}
              type={"text"}
              name={"body"}
              value={form.body}
              onChange={onChangeBody}
              pattern={"^.{10,}$"}
              title={"O texto deve ter no mínimo 10 caracteres"}
              required
            />
            <br />
            <Button type={"submit"}>Criar comentário</Button>
          </form>
        </section>
        <hr />

        <h2>Lista de Comentários</h2>
        {showComments}
      </Article>
    </Div>
  );
}
