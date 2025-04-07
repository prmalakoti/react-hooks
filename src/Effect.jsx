import react from "react";
import { useState } from "react";
import { useEffect } from "react";

const Effect = () => {
  const [count, setCount] = useState(0);
  const [multiply, setMultiply] = useState(1);

  useEffect(() => {
    console.log("hello");
  }); /* every update it will call */

  // useEffect(() => {
  //   console.log("hello");
  // }, []); /* Only first time when this componnent will loaded */

  // useEffect(() => {
  //   console.log("hello");
  // }, [count]); /* it will call every time whenever count value is changed */

  return (
    <div style={{ textAlign: "center", paddingTop: "20px" }}>
      <h3>useEffect...</h3>
      <h3>{count} new message!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h3>multiply by previous : {multiply}</h3>
      <button onClick={() => setMultiply(multiply * 2)}>Multiply</button>
    </div>
  );
};

export default Effect;
