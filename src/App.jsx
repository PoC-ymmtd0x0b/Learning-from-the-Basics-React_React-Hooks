import React, { useState, useEffect } from "react";

const SampleComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("レンダリング！");
  });

  const handleClick = () => {
    setText(inputValue);
    setInputValue("");
  };
  const handleChange = (value) => setInputValue(value);
  const textReset = () => {
    setInputValue("");
    setText("");
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={handleClick}>set Text</button>
      <button onClick={textReset}>Reset</button>

      <p>text: {text}</p>
    </div>
  );
};

function App() {
  return <SampleComponent />;
}

export default App;
