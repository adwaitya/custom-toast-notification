import React from "react";
import RadioButton from "./RadioButton";

const RadioButtonGroup = ({ label, options, onChange, selectedValue }) => {
  function renderOptions() {
    return options.map(({ label, value }, index) => {
      const shortenedOptionLabel = label.replace(/\s+/g, "");
      const optionId = `radio-option-${shortenedOptionLabel}`;

      return (
        <RadioButton
          value={value}
          label={label}
          key={optionId}
          id={optionId}
          name={label}
          //   disabled={disabled}
          defaultChecked={selectedValue}
          onChange={onChange}
        />
      );
    });
  }
  return (
    <div style={{ display: "flex", alignContent: "space-between" }}>
      {renderOptions()}
    </div>
  );
};

export default RadioButtonGroup;
