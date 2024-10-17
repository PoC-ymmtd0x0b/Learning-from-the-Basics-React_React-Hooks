import React, { useState } from "react";

export default function Input() {
  const [inputTextValue, setInputTextValue] = useState("");
  const [text, setText] = useState("React");
  const handleChange = (inputText) => setInputTextValue(inputText);
  const handleClick = () => {
    setText(inputTextValue);
    setInputTextValue("");
  };

  return (
    <>
      <h1>I love {text}!!!</h1>
      <input
        type="text"
        value={inputTextValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleClick}>入力</button>
    </>
  );
}
