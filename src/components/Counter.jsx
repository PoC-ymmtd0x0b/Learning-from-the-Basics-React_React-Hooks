import React from "react";
import PropTypes from "prop-types";

// ESLintのし的により引数の型を明示
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  initialCount: PropTypes.number.isRequired,
  countIncrement: PropTypes.func.isRequired,
  countDecrement: PropTypes.func.isRequired,
  countReset: PropTypes.func.isRequired,
};

export default function Counter({
  count,
  initialCount,
  countIncrement,
  countDecrement,
  countReset,
}) {
  return (
    <div>
      <p>現在のカウント数：{count}</p>
      <p>count の初期値：{initialCount}</p>
      <div className="container">
        <button onClick={countIncrement}>increment</button>
        <button onClick={countDecrement}>decrement</button>
        <button onClick={countReset}>reset</button>
      </div>
    </div>
  );
}
