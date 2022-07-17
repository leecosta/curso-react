//Código padrão do React
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
//React.DOM --> o primeiro elemento, no caso <App />, serve para
//chamar o que vai ser renderizado e o segundo elemento é o local,
//que no caso, 'root' é uma id de uma div do public/index.js
