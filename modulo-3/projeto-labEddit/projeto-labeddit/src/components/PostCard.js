import { useContext, useState } from "react";
import moment from "moment";
import GlobalContext from "../global/GlobalContext";
import { goToPostDetailsPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/urls";
import axios from "axios";

export function PostCard(props) {
  const navigate = useNavigate();

  const { states, setters, getters } = useContext(GlobalContext);

  const { postComments } = states;

  const { setPost } = setters;

  const { getPosts } = getters;

  const { voted, setVoted } = useState(true);

  const { notVoted, setNotVoted } = useState(true);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const goToComments = (navigate, id) => {
    setPost(props.post);
    goToPostDetailsPage(navigate, id);
  };
  const postVote = (postId, vote) => {
    const body = {
      direction: vote,
    };
    axios
      .post(`${Url}/posts/${postId}/votes`, body, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("voto registrado!");
        getPosts();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const changePostVote = (postId, vote) => {
    const body = {
      direction: vote,
    };
    axios
      .put(`${Url}/posts/${postId}/votes`, body, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("voto registrado!");
        getPosts();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const chooseVote = (typeVote) => {
    if (typeVote === "up") {
      if (isDownVoted) {
        changePostVote(props.post.id, 1, getPosts);

        setIsUpVoted(true);
        setIsDownVoted(false);
      } else {
        postVote(props.post.id, 1, getPosts);

        setIsUpVoted(true);
      }
    } else {
      if (isUpVoted) {
        changePostVote(props.post.id, -1, getPosts);

        setIsDownVoted(true);
        setIsUpVoted(false);
      } else {
        postVote(props.post.id, -1, getPosts);

        setIsDownVoted(true);
      }
    }
  };

  const deletePostVote = (postId) => {
    axios
      .delete(`${Url}/posts/${postId}/votes`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("Voto removido ");
        getPosts();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const removeVote = (typeVote) => {
    deletePostVote(props.post.id, getPosts);
    typeVote === "up" ? setVoted(false) : setNotVoted(false);
  };

  const renderButtons = props.isFeed ? (
    <>
      {props.post.userVote && isDownVoted ? (
        <button onClick={() => removeVote("down")}>Remover Não Gostei</button>
      ) : (
        <button onClick={() => chooseVote("down")}>
          {isUpVoted ? `Mudar para Não Gostei` : `Não Gostei`}
        </button>
      )}
      <br />
      {props.post.userVote && isUpVoted ? (
        <button onClick={() => removeVote("up")}>Remover Gostei</button>
      ) : (
        <button onClick={() => chooseVote("up")}>
          {isDownVoted ? `Mudar para Gostei` : `Gostei`}
        </button>
      )}
    </>
  ) : (
    <></>
  );
  return (
    <article>
      <div Key={props.post.id}>
        <h2>{props.post.title}</h2>
        <p>
          <b>Autor:</b>
          {props.post.userId}
        </p>
        <p>
          <b>Criado em:</b>
          {moment.utc(props.post.createdAt).format("DD/MM/YYYY")}
        </p>
        <img
          src={"https://picsum.photos/200/300?random=" + props.post.id}
          alt="Imagem aleatória do post"
        />
        <p>
          <b>Descrição:</b>
          {props.post.body}
        </p>
        <p>Votos: {props.post.voteSum ? props.post.voteSum : 0}</p>
        {renderButtons}
        <p>Comentários: {postComments.length}</p>
      </div>

      {props.isPosts && (
        <button onClick={() => goToComments(navigate, props.post.id)}>
          Ver comentários
        </button>
      )}
      <hr />
    </article>
  );
}
