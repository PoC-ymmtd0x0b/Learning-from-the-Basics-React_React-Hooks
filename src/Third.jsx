import React, { useContext } from "react";
import { CountContext } from "./CountProvider";

export const Third = () => {
  const [count, setCount] = useContext(CountContext);

  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>Thirdコンポーネント: {count}</p>
      <button onClick={handleClick}>+1ボタン</button>
    </>
  );
};
