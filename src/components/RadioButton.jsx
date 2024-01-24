import React, { useState } from "react";

const RadioButton = ({ label, id, value, defaultChecked,onChange,...rest }) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const handleRadioChange = (value) => {
    onChange(value);
  };
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        checked={value === defaultChecked}
        onChange={() => handleRadioChange(value)}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default RadioButton;
