import React, { useState } from "react";

export default function RadioButton() {
  const [checkedValue, setCheckedValue] = useState("赤");
  const handleChange = (value) => setCheckedValue(value);

  return (
    <>
      <p>現在選択されている値：{checkedValue}</p>
      <label>
        <input
          type="radio"
          value="赤"
          checked={checkedValue === "赤"}
          onChange={(e) => handleChange(e.target.value)}
        />
        赤
      </label>
      <label>
        <input
          type="radio"
          value="青"
          checked={checkedValue === "青"}
          onChange={(e) => handleChange(e.target.value)}
        />
        青
      </label>
      <label>
        <input
          type="radio"
          value="黄"
          checked={checkedValue === "黄"}
          onChange={(e) => handleChange(e.target.value)}
        />
        黄
      </label>
    </>
  );
}
