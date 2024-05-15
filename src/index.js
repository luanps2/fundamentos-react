import ReactDOM from 'react-dom'; //dom
import React from 'react'; //react
import './index.css'; //estilo

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'


ReactDOM.render(
    <div id="app">
        <Primeiro></Primeiro>
        <ComParametro 
        titulo="Situação do Aluno"
        aluno="Pedro Silva " nota={9.3}/>
        <ComParametro 
        titulo="Situação do Aluno"
        aluno="Maria Simone" 
        nota={5}/>

     

    </div>,
    document.getElementById('root')
)