import React from "react";
import { CountProvider } from "./CountProvider.jsx";
import { First } from "./First.jsx";

function App() {
  return (
    <CountProvider>
      <First />
    </CountProvider>
  );
}

export default App;
