import React, { useState } from "react";
import { LabelInput, CheckBoxInput } from "../styled/Form.styled";

const Flagged = ({ setTriggerFlagged }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
    setTriggerFlagged((f) => !f);
  };
  return (
    <LabelInput>
      <CheckBoxInput type="checkbox" onClick={handleChange} />
      Show Flagged Only
    </LabelInput>
  );
};

export default Flagged;
