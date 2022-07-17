import "./Card.css";

// Componente padrão do react, usado para estilizar (código css) e evitar repetição de código

const Card = (props) => {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
