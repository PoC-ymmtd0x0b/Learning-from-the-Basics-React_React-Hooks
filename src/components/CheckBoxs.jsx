import React, { useState } from "react";

export default function CheckBoxs() {
  const [checkedValues, setCheckedValues] = useState([]);

  const handleChange = (checkValue) => {
    if (checkedValues.includes(checkValue)) {
      setCheckedValues(
        checkedValues.filter((checkedValue) => checkedValue !== checkValue),
      );
    } else {
      setCheckedValues([...checkedValues, checkValue]);
    }
  };

  return (
    <>
      <p>現在選択されている値：{checkedValues.join("、")}</p>
      <label>
        <input
          type="checkbox"
          value="マウス"
          onChange={(e) => handleChange(e.target.value)}
          checked={checkedValues.includes("マウス")}
        />
        マウス
      </label>
      <label>
        <input
          type="checkbox"
          value="モニター"
          onChange={(e) => handleChange(e.target.value)}
          checked={checkedValues.includes("モニター")}
        />
        モニター
      </label>
      <label>
        <input
          type="checkbox"
          value="キーボード"
          onChange={(e) => handleChange(e.target.value)}
          checked={checkedValues.includes("キーボード")}
        />
        キーボード
      </label>
    </>
  );
}
