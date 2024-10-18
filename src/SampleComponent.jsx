import React, { useState } from "react";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JavaScript";

export default function SampleComponent() {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);

  const countIncrement = () => setCount(count + 1);
  const countDecrement = () => setCount(count - 1);
  const countReset = () => setCount(INITIAL_COUNT);

  const handleChange = (text) => setName(text);

  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <p>count の初期値：{INITIAL_COUNT}</p>
      <div className="container">
        <button onClick={countIncrement}>increment</button>
        <button onClick={countDecrement}>decrement</button>
        <button onClick={countReset}>reset</button>
      </div>

      <br />

      <p>Hello, {name} !!</p>
      <p>name の初期値：{INITIAL_NAME}</p>
      <div className="container">
        <input type="text" onChange={(e) => handleChange(e.target.value)} />
      </div>
    </div>
  );
}
