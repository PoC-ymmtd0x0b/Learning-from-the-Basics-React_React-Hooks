import React, { useState, useEffect, useRef } from "react";

const SampleComponent = () => {
  const inputRefObj = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("レンダリング！");
  });

  const handleClick = () => {
    setText(inputRefObj.current.value);
    inputRefObj.current.value = "";
  };
  const textReset = () => {
    inputRefObj.current.value = "";
    setText("");
  };

  return (
    <div>
      <input type="text" ref={inputRefObj} />
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
