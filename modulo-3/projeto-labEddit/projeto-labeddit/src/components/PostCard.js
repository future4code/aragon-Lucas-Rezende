import { useContext } from "react";
import moment from "moment";
import GlobalContext from "../global/GlobalContext";
import { goToPostDetailsPage } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";

export function PostCard(props) {
  const navigate = useNavigate();

  const { states, setters } = useContext(GlobalContext);

  const { posts } = states;

  const { setPost } = setters;

  const goToComments = (navigate, id) => {
    setPost(props.post);
    goToPostDetailsPage(navigate, id);
  };

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
        {/* {voteSum ? voteSum : 0}
         */}
        <p>Votos: 0</p>
        <button>Não Gostei</button>
        <br />
        <button>Gostei</button>
        {/* {commentCount ? commentCount : 0} */}
        <p>Comentários: 0</p>
      </div>

      {props.isFeed && (
        <button onClick={() => goToComments(navigate, props.post.id)}>
          Ver comentários
        </button>
      )}
      <hr />
    </article>
  );
}
