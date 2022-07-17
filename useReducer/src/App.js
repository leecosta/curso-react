import React, { createContext, useReducer } from "react";
import Child from "./Child";

// createContext
export const CountContext = createContext();

function App() {
  // const [count, setCount] = useState(0);

  //useReducer
  const countReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT1":
        return {
          // Está trazendo todos os valores do objeto e em baixo está alterando apenas o count1
          ...state,
          count1: state.count1 + action.payload,
        };
      case "INCREMENT2":
        return {
          ...state,
          count2: state.count2 + action.payload,
        };
      case "DECREMENT1":
        return {
          ...state,
          count1: state.count1 - action.payload,
        };
      case "DECREMENT2":
        return {
          ...state,
          count2: state.count2 - action.payload,
        };
      default:
        return state;
    }
  };

  const countInitialValue = {
    count1: 0,
    count2: 0,
  };

  const [count, setCount] = useReducer(countReducer, countInitialValue);

  return (
    <div className="App">
      <h1>Olá</h1>

      {/* Conseguir passar as infos para os filhos,netos,bisnetos,etc */}
      <CountContext.Provider value={{ count, setCount }}>
        <Child />
      </CountContext.Provider>
    </div>
  );
}

export default App;
