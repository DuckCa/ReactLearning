const Input = (props) => {
  const { functionalert } = props;
  functionalert("Duck");
  return (
    <>
      <input
        className="input-text"
        type="text"
        placeholder="Enter your task"
      ></input>
      <button className="btn-add">ADD</button>
      <image src=""></image>
      <div className="todo-data"></div>
    </>
  );
};

export default Input;
