import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [handlerForm, setHandlerForm] = useState(true);
  const [handlerButton, setHandlerButton] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // Enviando a variável expenseData do filho para o pai
    const expenseData = {
      ...enteredExpenseData,
      // id: Math.random().toString(), //gerar um valor aleatório
    };
    props.onAddExpense(expenseData);
    showExpenseForm();
  };

  const showExpenseForm = () => {
    handlerForm ? setHandlerForm(false) : setHandlerForm(true);
    !handlerButton ? setHandlerButton(true) : setHandlerButton(false);
  };

  return (
    <div className="new-expense">
      <button type="button" onClick={showExpenseForm} hidden={handlerButton}>
        Add New Expense
      </button>
      <div hidden={handlerForm}>
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={showExpenseForm}
        />
      </div>
    </div>
  );
};

export default NewExpense;
