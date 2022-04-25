import React from "react";

class Etapa1 extends React.Component {
  render() {
    return (
      <div>
        <h1> ETAPA 1 - DADOS GERAIS </h1>
        <h3>1- Qual o seu nome?</h3>
        <input></input>
        <h3>2- Qual a sua idade?</h3>
        <input></input>
        <h3>3- Qual o seu e-mail?</h3>
        <input></input>
        <h3>4- Qual a sua ecolaridade?</h3>
        <select>
          <option value="valor1">Ensino Médio Incompleto</option>
          <option value="valor2">Ensino Médio Completo</option>
          <option value="valor3">Ensino Superior Incompleto</option>
          <option value="valor4">Ensino Superior Completo</option>
        </select>
      </div>
    );
  }
}
export default Etapa1;
