export default (props) => {
    
    const {min, max} = props; //destructuring
    
    // const min = props.min;
    // const max = props.max;

  const aleatorio = parseInt(Math.random() * (max - min)) + props.min;
  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong>
        {props.min}
      </p>
      <p>
        <strong>Valor Máximo: </strong>
        {props.max}
      </p>
      <p>
        <strong>Valor Sorteado: </strong>
        {aleatorio}
      </p>
    </div>
  );
};
