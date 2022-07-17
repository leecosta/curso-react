import React, { useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

// precisa do React.forwardRef para encaminhar o ref
const Input = React.forwardRef((props, ref) => {
  // Toda vez que quiser usar o input como referência
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  // Usa para exportar o ref (Evitar utilizar). Primeiro parâmetro é o valor que a função irá usar para chamar o objeto, segundo parâmetro é um objeto que terá todas as variáveis que você conseguirá usar externamente
  useImperativeHandle(ref, () => {
    return {
      focus: activate, //activate é o nome daqui e focus é o nome que irá usar externamente
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.id}
        id={props.id}
        value={props.value}
        onChange={props.onChangeHandler}
        onBlur={props.onValidate}
      />
    </div>
  );
});

export default Input;
