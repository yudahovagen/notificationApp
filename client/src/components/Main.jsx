import React from "react";
import { MainContainer } from "./styled/Main.styled";
import Item from "./Item/Item";

const Main = ({
  items,
  triggerActive,
  triggerFlagged,
  setItems,
  searchInput,
}) => {
  const handleDelete = (i) => {
    let tmp = [...items].filter((item) => item.id !== i);
    setItems(tmp);
  };
  return (
    <MainContainer>
      {items.length > 0 ? (
        items.map((i) => (
          <Item
            handleDelete={handleDelete}
            triggerActive={triggerActive}
            triggerFlagged={triggerFlagged}
            item={i}
            key={i.id}
            searchInput={searchInput}
          />
        ))
      ) : (
        <></>
      )}
    </MainContainer>
  );
};

export default Main;
