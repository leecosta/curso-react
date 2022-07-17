import React, { useContext } from "react";
import { CountContext } from "./App";

function AnotherChild() {
  // useContext
  const { setCount } = useContext(CountContext);

  return (
    <div>
      <button
        onClick={() => {
          setCount({
            type: "INCREMENT1",
            payload: 5,
          });
        }}
      >
        Increment1
      </button>

      <button
        onClick={() => {
          setCount({
            type: "DECREMENT1",
            payload: 3,
          });
        }}
      >
        Decrement1
      </button>

      <button
        onClick={() => {
          setCount({
            type: "INCREMENT2",
            payload: 1,
          });
        }}
      >
        Increment2
      </button>

      <button
        onClick={() => {
          setCount({
            type: "DECREMENT2",
            payload: 2,
          });
        }}
      >
        Decrement2
      </button>
    </div>
  );
}

export default AnotherChild;
