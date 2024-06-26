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
      <Card titulo="#04 - Desafio Aleatório" color='#FA6900'>
        <Aleatorio min={0} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color ="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro Silva "
          nota={8.5}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588c73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
