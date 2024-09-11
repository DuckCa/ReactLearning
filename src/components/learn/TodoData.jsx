const Tododata = (props) => {
  const { name, age, data, todoList } = props;

  return (
    <>
      <div className="todo-data">
        <p>{JSON.stringify(todoList)}</p>
      </div>
    </>
  );
};

export default Tododata;
