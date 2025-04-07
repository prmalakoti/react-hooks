import React, { useRef } from "react";
function UseReferenceTimer() {
  const count = useRef(0);

  const increment = () => {
    count.current += 1;
    console.log("Count (doesn't re-render):", count.current);
  };

  return <button onClick={increment}>Log Count</button>;
}

export default UseReferenceTimer;
