import React from "react";
import { TextProvider } from "./TextProvider.jsx";
import { First } from "./First.jsx";

function App() {
  return (
    <TextProvider>
      <First />
    </TextProvider>
  );
}

export default App;
