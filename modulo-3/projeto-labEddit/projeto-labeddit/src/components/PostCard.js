import { useContext, useState } from "react";
import moment from "moment";
import GlobalContext from "../global/GlobalContext";
import { goToPostDetailsPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Url } from "../constants/urls";
import axios from "axios";
import styled from "styled-components";

const Div = styled.div`
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  background-color: white;
  margin: 2%;
  padding: 2%;
  width: 30vw;
  &:hover {
    -webkit-transform: scale(1.5);
    transform: scale(1.05);
  }
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

const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

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
      if (notVoted) {
        changePostVote(props.post.id, 1, getPosts);

        setIsUpVoted(true);
        setIsDownVoted(false);
      } else {
        postVote(props.post.id, 1, getPosts);

        setIsUpVoted(true);
      }
    } else {
      if (voted) {
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
    <div>
      {props.post.userVote && isDownVoted ? (
        <Button onClick={() => removeVote("down")}>Remover Não Gostei</Button>
      ) : (
        <Button onClick={() => chooseVote("down")}>
          {isUpVoted ? `Mudar para Não Gostei` : `Não Gostei`}
        </Button>
      )}
      <br />
      {props.post.userVote && isUpVoted ? (
        <Button onClick={() => removeVote("up")}>Remover Gostei</Button>
      ) : (
        <Button onClick={() => chooseVote("up")}>
          {isDownVoted ? `Mudar para Gostei` : `Gostei`}
        </Button>
      )}
    </div>
  ) : (
    <></>
  );
  return (
    <Div>
      <div Key={props.post.id}>
        <h2>{props.post.title}</h2>
        <p>
          <b>Autor:</b>
          {props.post.username}
        </p>
        <p>
          <b>Criado em:</b>
          {moment.utc(props.post.createdAt).format("DD/MM/YYYY")}
        </p>
        <Img
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
      {props.isFeed && (
        <Button onClick={() => goToComments(navigate, props.post.id)}>
          Ver comentários
        </Button>
      )}
    </Div>
  );
}
