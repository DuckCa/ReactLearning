const Input = (props) => {
  const { functionalert } = props;
  // functionalert("Duck");
  const eventhandle = (name) => {
    console.log(name);
  };
  return (
    <>
      <input
        className="input-text"
        type="text"
        placeholder="Enter your task"
        onChange={(event) => {
          eventhandle(event.target.value);
        }}
      ></input>
      <button className="btn-add">ADD</button>
      <image src=""></image>
      <div className="todo-data"></div>
    </>
  );
};

export default Input;
