import React from "react";
import { LabelInput, TextInput } from "../styled/Form.styled";

const Search = ({ setSearchInput }) => {
  return (
    <LabelInput>
      Search:
      <TextInput type="text" onChange={(e) => setSearchInput(e.target.value)} />
    </LabelInput>
  );
};

export default Search;
