import { useState } from "react";

const Input = (props) => {
  const [valueInput, setvalueInput] = useState("");
  const { todoFunction } = props;
  // functionalert("Duck");
  const handleclick = () => {
    todoFunction(valueInput);
    setvalueInput("");
  };
  return (
    <>
      <input
        className="input-text"
        type="text"
        placeholder="Enter your task"
        onChange={(event) => {
          setvalueInput(event.target.value);
        }}
        value={valueInput}
      ></input>
      <button className="btn-add" onClick={() => handleclick()}>
        ADD
      </button>
      <image src=""></image>
    </>
  );
};

export default Input;
