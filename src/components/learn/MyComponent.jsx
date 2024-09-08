import "./style.css";
const MyComponent = () => {
  const hoidanit = "eric 1";
  const duckObject = {
    name: "Duck",
    age: 18,
  };
  return (
    <>
      <div className="child" style={{ borderRadius: "10px" }}>
        {hoidanit}&duck dep dzai
      </div>
      <div>duck dep dzai</div>
      <div>{JSON.stringify(duckObject)}</div>
      <div>{console.log("HELLO DUCK")}</div>
    </>
  );
};

export default MyComponent;
