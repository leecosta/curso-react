import React, { useContext } from "react";
import AnotherChild from "./AnotherChild";
import { CountContext } from "./App";

function Child() {
  // useContext
  const { count } = useContext(CountContext);

  return (
    <div>
      <h1>Count1: {count.count1}</h1>
      <h1>Count2: {count.count2}</h1>

      <AnotherChild />
    </div>
  );
}

export default Child;
