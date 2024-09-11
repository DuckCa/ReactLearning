import { useState } from "react";

const Input = (props) => {
  const [valueInput, setvalueInput] = useState("eric");
  const { todoFunction } = props;
  // functionalert("Duck");

  return (
    <>
      <input
        className="input-text"
        type="text"
        placeholder="Enter your task"
        onChange={(event) => {
          setvalueInput(event.target.value);
        }}
      ></input>
      <button className="btn-add" onClick={() => todoFunction(valueInput)}>
        ADD
      </button>
      <image src=""></image>
    </>
  );
};

export default Input;
