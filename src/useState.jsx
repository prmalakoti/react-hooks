import React from "react";
import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");
  /* work with object */
  const [details, setDetails] = useState({ count: 0, input: "" });

  function incrementCounter() {
    setCounter(counter + 1);
    setDetails((prev) => ({
      ...prev,
      count: prev.count + 1,
    }));
  }
  console.log(JSON.stringify(details));
  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h2>
        {" "}
        {input} has clicked {counter} times
      </h2>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default UseState;
