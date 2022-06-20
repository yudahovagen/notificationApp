import React from "react";
import Search from "./Search";
import Flagged from "./Flagged";
import Active from "./Active";
import { FormContainer } from "../styled/Form.styled";

const Form = ({ setSearchInput, setTriggerActive, setTriggerFlagged }) => {
  return (
    <FormContainer>
      <Search setSearchInput={setSearchInput} />
      <Flagged setTriggerFlagged={setTriggerFlagged} />
      <Active setTriggerActive={setTriggerActive} />
    </FormContainer>
  );
};

export default Form;
