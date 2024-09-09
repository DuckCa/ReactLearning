const Tododata = (props) => {
  const { name, age, data } = props;

  return (
    <>
      <div className="todo-data">
        <p>My name is {data.name}</p>
        <p>Jolibee</p>
        <p></p>
      </div>
    </>
  );
};

export default Tododata;
