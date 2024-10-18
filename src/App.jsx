import React, { useState, useEffect } from "react";

const INITIAL_COUNT = 0;

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const callbackFanction = () => {
    document.title = `${count} 回クリックされました`;
  };

  useEffect(callbackFanction, [count]);

  const countIncrement = () => setCount(count + 1);
  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <button onClick={countIncrement}>+ 1 ボタン</button>
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

function App() {
  return <SampleComponent />;
}

export default App;
