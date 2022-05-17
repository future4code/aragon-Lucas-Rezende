import { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

const Figure2 = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  background-color: #b0e0e6;
  padding: 5%;
`;

const Button = styled.button`
  background-color: #add8e6;
  border-radius: 10px;
  margin: 2% 0 0 10px;
  &:hover {
    background-color: #87ceeb;
    color: white;
  }
`;

const Input = styled.input`
  margin: 10%;
`;

function Post(props) {
  const [descurtido, setCurtido] = useState(false);
  const semCurtida = 0;
  const [semComentar, setComentando] = useState(false);
  const [lista, setListaComentario] = useState([]);
  const [inputValue, setinputvalue] = useState("");

  const onClickCurtida = () => {
    setCurtido(!descurtido);
  };

  const onClickComentario = () => {
    setComentando(!semComentar);
  };

  const onChangeComentario = (event) => {
    setinputvalue(event.target.value);
  };

  const enviarComentario = (comentario) => {
    const novaLista = [...lista, inputValue];
    setListaComentario(novaLista);
    setinputvalue("");
  };

  const renderizarLista = lista.map((item) => {
    return (
      <ul>
        <li>{item}</li>
      </ul>
    );
  });

  const caixaDeComentario =
    semComentar !== true ? (
      <>
        <label htmlFor={"comentario"}>Comente: </label>
        <Input
          id={"comentario"}
          value={inputValue}
          onChange={onChangeComentario}
        />
        {/* Passo4 */}
        <Button onClick={enviarComentario}>Enviar</Button>
      </>
    ) : (
      renderizarLista
    );

  return (
    <Div>
      <header>
        <Figure>
          <img src={props.fotoUsuario} alt={"Imagem do usuario"} />
          <h3>{props.nomeUsuario}</h3>
        </Figure>
        <hr></hr>
      </header>
      <hr />
      <main>
        <Figure2>
          <p>{`"Acordar para quem você é requer desapego de quem você imagina ser" (Alan Watts)`}</p>
          <img src={props.fotoPost} alt={"Imagem do post"} />
        </Figure2>
        <hr></hr>
      </main>
      <hr />
      <footer>
        <section>
          <span>
            Número de curtidas: {descurtido === false ? semCurtida : 1}
          </span>

          <Button onClick={onClickCurtida}>
            {descurtido === false ? "like" : "dislike"}
          </Button>
        </section>
        <section>
          <span>Número de comentários: {lista.length}</span>
          <Button onClick={onClickComentario}>
            {semComentar === false
              ? "Fechar comentário"
              : "Adicionar comentário"}
          </Button>
          <h4>Comentários</h4>
          {caixaDeComentario}
        </section>
      </footer>
    </Div>
  );
}

export default Post;
