import React, { useState } from "react";
import Counter from "./components/Counter.jsx";
import Hello from "./components/Hello.jsx";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JavaScript";

function App() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);

  const countIncrement = () => setCount(count + 1);
  const countDecrement = () => setCount(count - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChange = (text) => setName(text);

  return (
    <div className="App">
      <Counter
        count={count}
        initialCount={INITIAL_COUNT}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
      />
      <Hello name={name} initialName={INITIAL_NAME} onChange={handleChange} />
    </div>
  );
}

export default App;
