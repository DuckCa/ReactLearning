import { useState } from "react";
import MyComponent from "./components/learn/MyComponent";
import Input from "./components/learn/Input";
import Tododata from "./components/learn/TodoData";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
function App() {
  const [todoList, settodoList] = useState([
    {
      id: 1,
      name: "DUck",
    },
    {
      id: 2,
      name: "Nam",
    },
  ]);

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
      <Tododata todoList={todoList} />
      <div className="todo-image"></div>
    </div>
  );
}

export default App;
