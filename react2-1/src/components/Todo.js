//Importando função useState do react
import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

//Criando a função Todo com o parâmetro props
function Todo(props) {
  //Inicialmente o valor é falso, setModalIsOpen serve para alterar o
  //estado e modalIsOpen para chamar caso for true
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      {/*Para escrever código js dentro do html colocar entre {}, 
      props.text está deixando o texto com o valor personalizado 
      conforme escrito no App.js */}
      <h2>{props.text}</h2>

      <div className="actions">
        {/*Podemos utilizar normalmente os eventos do js aqui, como o 
        onClick e colocar como parâmetro a função que será executada 
        quando o evento ocorrer */}
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {/* Se as condições forem verdadeiras, a segunda é executada */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}

      {/* Lembrar de chamar a propriedade no arquivo Backdrop.js */}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
