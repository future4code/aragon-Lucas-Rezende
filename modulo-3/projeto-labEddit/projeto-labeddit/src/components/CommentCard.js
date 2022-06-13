import moment from "moment";
import styled from "styled-components";
import { Url } from "../constants/urls";
const { default: axios } = require("axios");
const { useEffect } = require("react");
const { useState } = require("react");

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

export function CommentCard(props) {
  const { userVote, id, userId, body, createdAt, voteSum, postId } =
    props.comment;

  const [postComments, setPostComments] = useState([]);

  const [isDownVoted, setIsDownVoted] = useState(false);

  const [isUpVoted, setIsUpVoted] = useState(false);

  const getPostComments = (postId) => {
    axios
      .get(`${Url}/posts/${postId}/comments`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setPostComments(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    if (userVote) {
      userVote === 1 ? setIsUpVoted(true) : setIsDownVoted(true);
    }
  }, [userVote]);
  const chooseVote = (typeVote) => {
    if (typeVote === "up") {
      if (isDownVoted) {
        changeCommentVote(id, 1, postId);

        setIsUpVoted(true);
        setIsDownVoted(false);
      } else {
        createCommentVote(id, 1, postId);

        setIsUpVoted(true);
      }
    } else {
      if (isUpVoted) {
        changeCommentVote(id, -1, postId);

        setIsDownVoted(true);
        setIsUpVoted(false);
      } else {
        createCommentVote(id, -1, postId);

        setIsDownVoted(true);
      }
    }
  };

  const changeCommentVote = (id, vote, postId) => {
    const body = {
      direction: vote,
    };
    axios
      .put(`${Url}/comments/${id}/votes`, body, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("Voto alterado");
        getPostComments(postId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const createCommentVote = (commentId, vote, postId) => {
    const body = {
      direction: vote,
    };
    axios
      .post(`${Url}/comments/${commentId}/votes`, body, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("Voto registrado!");
        getPostComments(postId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const deleteCommentVote = (id, postId) => {
    axios
      .delete(`${Url}/comments/${id}/votes`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then(() => {
        alert("Voto removido");
        getPostComments(postId);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const removeVote = (typeVote) => {
    deleteCommentVote(id, postId);

    typeVote === "up" ? setIsUpVoted(false) : setIsDownVoted(false);
  };

  const renderButtons = (
    <>
      {userVote && isDownVoted ? (
        <Button onClick={() => removeVote("down")}>Remover Não Gostei</Button>
      ) : (
        <Button onClick={() => chooseVote("down")}>
          {isUpVoted ? `Mudar para Não Gostei` : `Não Gostei`}
        </Button>
      )}
      <br />

      {userVote && isUpVoted ? (
        <Button onClick={() => removeVote("up")}>Remover Gostei</Button>
      ) : (
        <Button onClick={() => chooseVote("up")}>
          {isDownVoted ? `Mudar para Gostei` : `Gostei`}
        </Button>
      )}
    </>
  );

  return (
    <div>
      <article>
        <h3>{body}</h3>
        <span>
          <b>Autor: </b>
          {userId}
        </span>
        <p>
          <b>Criado em: </b>
          {moment.utc(createdAt).format("DD/MM/YYYY")}
        </p>
        <p>Votos: {voteSum ? voteSum : 0}</p>
        {renderButtons}
        <hr />
      </article>
    </div>
  );
}
