import classes from "./Card.module.css";

function Card(props) {
  // props.children sempre mantém o conteúdo que está dentro do componente
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;
