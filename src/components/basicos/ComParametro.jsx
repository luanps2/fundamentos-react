import React from "react"; // depreciado, não é necessário
export default function ComParametro(props) {
  // const sub = props.subtitulo
  console.log(props);
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado"; //não é possivel alterar as propriedades dos componentes já declarados
  const nota = Math.ceil(props.nota); //arredonda nota pra cima

  return (
    <div>
      <h2>{props.titulo}</h2>

      <p>
        <strong> {props.aluno} </strong>
        tem nota <strong> {nota} </strong>e está
        <strong> {status} </strong>
      </p>
    </div>
  );
}
