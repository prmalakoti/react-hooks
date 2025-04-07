import React, { useState, useEffect, useRef } from "react";

function UseReferenceTimer() {
  const [name, setName] = useState("");
  //const [count, setCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    //setCount(count + 1);
    count.current = count.current + 1;
  });

  return (
    <div style={{ padding: "20px" }}>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3> Name : {name}</h3>
      <h3> Renders : {count.current}</h3>
    </div>
  );
}

export default UseReferenceTimer;
