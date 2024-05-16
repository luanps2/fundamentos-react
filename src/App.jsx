import React from "react";

import Card from './components/layout/Card'
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>Fundamentos React </h1>

    <Card titulo="Desafio Aleatório">
      <Aleatorio min={0} max={60} />
    </Card>

    <Card titulo="Fragmento">
      <Fragmento />
    </Card>

    <Card titulo="Com Parâmetro">
      <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva " nota={8.5} />
    </Card>

    <Card titulo="Primeiro Componente">

      <Primeiro></Primeiro>
    </Card>





  </div>
);
