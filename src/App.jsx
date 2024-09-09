import MyComponent from "./components/learn/MyComponent";
import Input from "./components/learn/Input";
import Tododata from "./components/learn/TodoData";
import "./components/todo/todo.css";
import reactLogo from "./assets/react.svg";
function App() {
  const hoidanit = "Eric";
  const age = 25;
  const data = {
    name: "Duck",
    gender: 25,
  };
  const functionalert = (name) => {
    alert(`HELLO WORLD ${name} `);
  };
  return (
    <div className="todo-Container">
      <MyComponent />
      <Input functionalert={functionalert} />
      <Tododata name={hoidanit} age={age} data={data} />
      <div className="todo-image"></div>
    </div>
  );
}

export default App;
