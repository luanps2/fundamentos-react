import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";

export default () => (
  <div id="app">
    <h1>Fundamentos React </h1>
    <Aleatorio min={0} max={60}/>
    <Fragmento/>
    <ComParametro titulo="Situação do Aluno" aluno="Pedro Silva " nota={8.5} />
    <ComParametro titulo="Situação do Aluno" aluno="Maria Simone" nota={5} />
    <Primeiro></Primeiro>
  </div>
);
