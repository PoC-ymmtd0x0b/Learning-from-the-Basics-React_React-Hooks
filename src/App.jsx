import React, { createContext, useContext } from "react";

const SampleContextObj = createContext();

const ConsumerComponent = () => {
  const messageText = useContext(SampleContextObj);

  console.log(messageText);

  return <p>{messageText}</p>;
};

const message = "I love React!!";

function App() {
  return (
    <SampleContextObj.Provider value={message}>
      <ConsumerComponent />
    </SampleContextObj.Provider>
  );
}

export default App;
