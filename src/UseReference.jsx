import React, { useRef } from "react";
import UseReferenceTimer from "./UseReferenceTimer";

function UseReference() {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusSecondInput = () => {
    secondInputRef.current.focus();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h3> 4. useRef...</h3>
      <input
        ref={firstInputRef}
        type="text"
        placeholder="First input"
        style={{ display: "block", marginBottom: "10px" }}
      />

      <input
        ref={secondInputRef}
        type="text"
        placeholder="Second input"
        style={{ display: "block", marginBottom: "10px" }}
      />
      <button onClick={focusSecondInput}>Focus Second Input</button>
      <br></br>

      <h4>
        Timer: Store values that persist but don’t trigger re-renders --|{" "}
      </h4>
      <UseReferenceTimer></UseReferenceTimer>
    </div>
  );
}

export default UseReference;
