import React, { useState } from "react";

const values = [
  { id: 1, item: "HTML" },
  { id: 2, item: "CSS" },
  { id: 3, item: "JavaScript" },
];

const SelectItems = values.map((value) => {
  return (
    <option key={value.id} value={value.item}>
      {value.item}
    </option>
  );
});

export default function SelectBox() {
  const [selectedValue, setSelectedValue] = useState(values[0]["item"]);
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
        {SelectItems}
      </select>
    </>
  );
}
