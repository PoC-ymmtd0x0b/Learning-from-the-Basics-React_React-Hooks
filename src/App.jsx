import React, { useRef } from "react";

const SampleComponent = () => {
  const inputRefObj = useRef(null);

  const handleClick = () => {
    inputRefObj.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRefObj} />
      <button onClick={handleClick}>入力エリアをフォーカス</button>
    </div>
  );
};

function App() {
  return <SampleComponent />;
}

export default App;
