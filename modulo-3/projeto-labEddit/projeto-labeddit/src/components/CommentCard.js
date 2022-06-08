import moment from "moment";

export function CommentCard(props) {
  const { userId, body, createdAt, voteSum } = props.comment;

  return (
    <>
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
        {/* <p>Votos: {voteSum ? voteSum : 0}</p> */}
        <button>Não Gostei</button>
        <br />
        <button>Gostei</button>
        <hr />
      </article>
    </>
  );
}
