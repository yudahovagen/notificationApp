import React, { useState, useEffect } from "react";
import ItemButtons from "./ItemButtons";
import { NotifiWrapper, MsgContainer, Date, Msg } from "../styled/Item.styled";

const BACKGROUNDTHEME = {
  red: "linear-gradient(#fc6780, #faabb8, white);",
  green: "linear-gradient(#98fa86, #caf9c2, white);",
  yellow: "linear-gradient(#f8f38d, #fffdcf, white);",
};

const Item = ({
  item,
  triggerActive,
  triggerFlagged,
  handleDelete,
  searchInput,
}) => {
  const [isFlagged, setIsFlagged] = useState(false);
  const [displayItem, setDisplayItem] = useState(true);
  const [backGroundTheme, setBackgroundTheme] = useState("");

  //handle flagged, active and search triggers:
  useEffect(() => {
    //search input field empty
    if (searchInput === "") {
      if (triggerActive && triggerFlagged) {
        //both active and flagged are triggerd
        setDisplayItem(item.active && isFlagged);
      } else if (triggerActive) {
        //only active
        setDisplayItem(item.active);
      } else if (triggerFlagged) {
        //only flagged
        setDisplayItem(isFlagged);
      } else {
        //no flagged or active
        setDisplayItem(true);
      }
    }
    //search input field takken into account
    else {
      if (item.information.toLowerCase().includes(searchInput.toLowerCase())) {
        if (triggerActive && triggerFlagged) {
          //both active and flagged are triggerd
          setDisplayItem(item.active && isFlagged);
        } else if (triggerActive) {
          //only active
          setDisplayItem(item.active);
        } else if (triggerFlagged) {
          //only flagged
          setDisplayItem(isFlagged);
        } else {
          //no flagged or active
          setDisplayItem(true);
        }
      } else {
        setDisplayItem(false);
      }
    }
  }, [
    triggerActive,
    triggerFlagged,
    isFlagged,
    searchInput,
    item.information,
    item.active,
  ]);

  //sets background theme based on severity color
  useEffect(() => {
    item.color === "red"
      ? setBackgroundTheme(BACKGROUNDTHEME.red)
      : item.color === "green"
      ? setBackgroundTheme(BACKGROUNDTHEME.green)
      : setBackgroundTheme(BACKGROUNDTHEME.yellow);
  }, [item.color]);

  return (
    <NotifiWrapper displayItem={displayItem} color={backGroundTheme}>
      <MsgContainer>
        <Date>{item.date}</Date>
        <Msg>{item.information}</Msg>
      </MsgContainer>
      <ItemButtons
        setDisplayItem={setDisplayItem}
        setIsFlagged={setIsFlagged}
        isFlagged={isFlagged}
        handleDelete={handleDelete}
        item={item}
      />
    </NotifiWrapper>
  );
};

export default Item;
