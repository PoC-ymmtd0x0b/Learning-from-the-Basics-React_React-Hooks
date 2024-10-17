import React, { useState } from "react";

export default function SelectBox() {
  const [selectedValue, setSelectedValue] = useState("HTML");
  const handleChange = (selected) => setSelectedValue(selected);

  return (
    <>
      <p>
        現在選択されている値：<b>{selectedValue}</b>
      </p>

      <select
        value={selectedValue}
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="HTML">HTML</option>
        <option value="CSS">CSS</option>
        <option value="JavaScript">JavaScript</option>
      </select>
    </>
  );
}
