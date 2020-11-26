import React from "react";
import fundo from "../../assects/download1.jpg";
import foto from "../../assects/download2.jpg";
import "./perfil.css";

export default class Perfil extends React.Component {
  render() {
    return (
      <div id="Perfil">
        <img src={fundo} alt="fundo-perfil" id="fundo-perfil" />
        <img src={foto} alt="foto-perfil" id="foto-perfil" />
        <h2 id="nome1">João Henrique</h2>
        <p id="prof">Desenvolvedor Front-End</p>
        <br />
        <p id="lugar">Recife-Pe</p>
        <button id="button-add">Conectar</button>
        <button id="button-add1">Mensagem</button>
        <button id="button-add2">...</button>
      </div>
    );
  }
}
