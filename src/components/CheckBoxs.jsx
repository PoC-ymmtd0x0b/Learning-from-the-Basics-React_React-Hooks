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
          onChange={(e) => onChange(e.target.value, e.target.checked)}
          checked={checked[value.item]}
        />
        {value.item}
      </label>
    );
  });

export default function CheckBoxs() {
  const [checkedValues, setCheckedValues] = useState(
    values.reduce((acc, cur) => {
      acc[cur.item] = false;
      return acc;
    }, {}),
  );

  const handleChange = (checkValue, checkedState) => {
    setCheckedValues({ ...checkedValues, [checkValue]: checkedState });
  };

  const stateOfCheckValues = Object.entries(checkedValues).reduce(
    (pre, [key, value]) => {
      value && pre.push(key);
      return pre;
    },
    [],
  );

  return (
    <>
      <p>現在選択されている値：{stateOfCheckValues.join("、")}</p>
      <CheckBtnItems onChange={handleChange} checked={checkedValues} />
    </>
  );
}
