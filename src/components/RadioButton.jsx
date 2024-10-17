import React, { useState } from "react";

const values = [
  { id: 1, item: "赤" },
  { id: 2, item: "青" },
  { id: 3, item: "黄" },
];

const RadioBtnItems = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="radio"
          value={value.item}
          checked={checked === value.item}
          onChange={() => onChange(value.item)}
        />
        {value.item}
      </label>
    );
  });

export default function RadioButton() {
  const [checkedValue, setCheckedValue] = useState(values[0]["item"]);
  const handleChange = (value) => setCheckedValue(value);

  return (
    <>
      <p>現在選択されている値：{checkedValue}</p>
      <RadioBtnItems onChange={handleChange} checked={checkedValue} />
    </>
  );
}
