import React from "react";
import {
  ButtonContainer,
  FlaggedButton,
  Hidebutton,
} from "../styled/Item.styled";
const ItemButtons = ({
  isFlagged,
  handleDelete,
  item,
  setDisplayItem,
  setIsFlagged,
}) => {
  const deleteItem = () => {
    handleDelete(item.id);
  };
  const hideItem = () => {
    setDisplayItem(false);
  };
  const toggleFlagged = () => {
    setIsFlagged((f) => !f);
  };
  return (
    <ButtonContainer>
      <FlaggedButton isFlagged={isFlagged} onClick={toggleFlagged}>
        Flagged
      </FlaggedButton>
      <Hidebutton onClick={hideItem}>Hide</Hidebutton>
      <Hidebutton onClick={deleteItem}>Delete</Hidebutton>
    </ButtonContainer>
  );
};

export default ItemButtons;
