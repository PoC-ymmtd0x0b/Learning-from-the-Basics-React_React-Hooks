import React, { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");
  const handleChange = (name) => setName(name);

  return (
    <>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <p>こんにちは、{name}さん</p>
    </>
  );
}
