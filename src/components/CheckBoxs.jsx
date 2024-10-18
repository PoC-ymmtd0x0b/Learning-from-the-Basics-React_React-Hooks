import React, { useState } from "react";

const values = [
  { id: 1, item: "マウス" },
  { id: 2, item: "モニター" },
  { id: 3, item: "キーボード" },
];

const CheckBtnItems = ({ onChange, checked }) =>
  values.map((value) => {
    return (
      <label key={value.id}>
        <input
          type="checkbox"
          value={value.item}
          onChange={(e) => onChange(e.target.value)}
          checked={checked.includes(value.item)}
        />
        {value.item}
      </label>
    );
  });

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
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </>
  );
}
