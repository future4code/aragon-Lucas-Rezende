import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQGFvz4RW_KWFg/profile-displayphoto-shrink_400_400/0/1642720946813?e=1655942400&v=beta&t=SEXZ0njidFQXf6RNh2PnF3ugRhjilvDj47-bGGIDlUI"
          nome="Lucas Macedo Segantini Rezende"
          descricao="Oi, eu sou o Lucas. Sou aluno da Labenu. Adoro estudar javascript e passos alguns apuros com CSS."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno
          imagem="https://imagensemoldes.com.br/wp-content/uploads/2020/05/%C3%8Dcone-Email-PNG.png"
          email="   E-mail: lucasmacedo@msn.com"
        />

        <CardPequeno
          imagem="https://img1.gratispng.com/20180531/ucv/kisspng-geo-fence-computer-icons-computer-software-black-address-symbols-5b1042e1a7ca37.4259322515277923536873.jpg"
          email="   Endereço: av dos ferreiras"
        />
      </div>
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://miro.medium.com/max/3150/2*pq7dg0Y11VmKBSy6qiJdtQ.png"
          nome="Labenu"
          descricao="Sou estudante Web full stack"
        />

        <CardGrande
          imagem="https://cdn-images-1.medium.com/max/1200/1*ym1S_0qJ8esgtWfKc66aVA.png"
          nome="Loggi"
          descricao="Atualmente sou desenvolvedor iniciante"
        />

        <CardGrande
          imagem="http://strange-ring.surge.sh/img/logo%20pascoal.png"
          nome="Pascoal Ferragens"
          descricao="Era responsável pelas vendas e atendimento ao cliente."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          link="https://www.facebook.com/lucas.macedo.9655"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
