import React, { useState } from "react";
import { StyledRadio } from "../styled";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  cursor: default;
  margin-right:12px;
`;

const RadioButton = ({
  label,
  id,
  value,
  defaultChecked,
  onChange,
  ...rest
}) => {
  const [selectedValue, setSelectedValue] = useState(value);
  const handleRadioChange = (value) => {
    onChange(value);
  };
  return (
    <Wrapper>
      <StyledRadio
        color={value}
        type="radio"
        id={id}
        value={value}
        checked={value === defaultChecked}
        onChange={() => handleRadioChange(value)}
      />
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </Wrapper>
  );
};

export default RadioButton;
