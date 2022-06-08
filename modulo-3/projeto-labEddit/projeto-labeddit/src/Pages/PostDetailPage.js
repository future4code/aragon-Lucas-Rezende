import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { CommentCard } from "../components/CommentCard";
import { Url } from "../constants/urls";
import GlobalContext from "../global/GlobalContext";
import { goBack } from "../routes/coordinator";
import img from "../image/logo.png";

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
  }, []);

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
    <main>
      <img src={img} alt="logo do site" height="100px" />
      <hr />
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <section>
        <h2>Informações do Post</h2>
        <PostCard key={post.id} post={post} isFeed={false} />
      </section>
      <section>
        <h2>Escreva seu comentário</h2>
        <form onSubmit={createComment}>
          <label htmlFor={"body"}> Comentário: </label>
          <input
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
          <button type={"submit"}>Criar comentário</button>
        </form>
      </section>
      <hr />
      <section>
        <h2>Lista de Comentários</h2>
        {showComments}
      </section>
    </main>
  );
}
