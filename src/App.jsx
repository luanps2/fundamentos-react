import React from "react";
import './App.css'
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>Fundamentos React </h1>

    <div className="Cards">
      <Card titulo="#04 - Desafio Aleatório">
        <Aleatorio min={0} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva "
          nota={8.5}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
