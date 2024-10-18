import React, { useState, useEffect } from "react";

const INITIAL_COUNT = 0;

const Timer = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const callbackFanction = () => {
    alert("副作用関数が実行されました！");
    const timer = setInterval(countIncrement, 1000);

    return () => {
      console.log("timerが削除されました！");
      clearInterval(timer);
    };
  };

  useEffect(callbackFanction, []);

  const countIncrement = () => {
    setCount(count + 1);
    console.log("カウントアップ +1");
  };
  const countReset = () => setCount(INITIAL_COUNT);

  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

function App() {
  const [display, toggleDisplay] = useState(false);
  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };

  return (
    <>
      <button onClick={handleToggleDisplay}>
        {display ? "タイマーを非表示" : "タイマーを表示"}
      </button>

      {display && <Timer />}
    </>
  );
}

export default App;
