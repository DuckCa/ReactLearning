import { useState } from "react";
import MyComponent from "./components/learn/MyComponent";
import Input from "./components/learn/Input";
import Tododata from "./components/learn/TodoData";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
function App() {
  const [todoList, settodoList] = useState([]);

  const todoFunction = (name) => {
    const newtodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name,
    };
    settodoList([...todoList, newtodo]);
  };
  const randomIntFromInterval = (min, max) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-Container">
      <MyComponent />
      <Input todoFunction={todoFunction} />
      {todoList.length > 0 ? (
        <Tododata todoList={todoList} />
      ) : (
        <div className="">
          <img src="https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg" />
        </div>
      )}

      {/* {todoList.length > 0 && <Tododata todoList={todoList} />}
      {todoList.length === 0 && (
        <div className="">
          <img src="https://static.wixstatic.com/media/8a8033_a738085f564f4d43aa34edebaebae5b5~mv2_d_1600_1600_s_2.jpg/v1/fit/w_1000%2Ch_1000%2Cal_c%2Cq_80/file.jpg" />
        </div>
      )} */}
    </div>
  );
}

export default App;
