import React from "react";
import PropTypes from "prop-types";

// ESLintのし的により引数の型を明示
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  initialName: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default function Hello({ name, initialName, onChange }) {
  return (
    <div>
      <p>Hello, {name} !!</p>
      <p>name の初期値：{initialName}</p>
      <div className="container">
        <input type="text" onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
}
