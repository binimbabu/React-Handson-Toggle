import { useState } from "react";

function App() {
  var [show, setShow] = useState(false);
  function toggle() {
    setShow((togg) => !togg);
  }
  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={toggle}>{show ? "Hide" : "Show"}</button>
      {show && <Child />}
    </div>
  );
}
export function Child() {
  return <h1>Child Component</h1>;
}
export default App;
