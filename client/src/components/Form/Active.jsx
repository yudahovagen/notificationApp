import React, { useState } from "react";
import { LabelInput, CheckBoxInput } from "../styled/Form.styled";

const Active = ({ setTriggerActive }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    setTriggerActive((a) => !a);
  };
  return (
    <LabelInput>
      <CheckBoxInput type="checkbox" onClick={handleChange} />
      Show Active Only
    </LabelInput>
  );
};

export default Active;
