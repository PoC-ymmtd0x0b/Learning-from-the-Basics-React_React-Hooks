import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handlCcountAdd = () => setCount(count + 1);
  const handlCcountSub = () => setCount(count - 1);
  const handlCcountReset = () => setCount(0);

  return (
    <>
      <p>現在のカウント数：{count}</p>
      <div className="container">
        <button onClick={handlCcountAdd}>ボタン+1</button>
        <button onClick={handlCcountSub}>ボタン-1</button>
        <button onClick={handlCcountReset}>リセット</button>
      </div>
    </>
  );
}
