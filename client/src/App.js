import React, { useState, useEffect } from "react";
import Main from "./components/Main";
import Form from "./components/Form/Form";
import Header from "./components/Header";
import { Wrapper } from "./components/styled/Wrapper.styled";
import axios from "axios";

const FETCH_URL = `http://localhost:8080/api/v1/getNotifications`;

const App = () => {
  const [items, setItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [triggerActive, setTriggerActive] = useState(false);
  const [triggerFlagged, setTriggerFlagged] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get(`${FETCH_URL}`);
      let data = res.data.notifications;
      //adding unique id for each item
      data.forEach((item) =>
        Object.assign(item, { id: item.date + Math.random() })
      );
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Wrapper>
      <Header />
      <Form
        setTriggerFlagged={setTriggerFlagged}
        setTriggerActive={setTriggerActive}
        items={items}
        setSearchInput={setSearchInput}
      />
      <Main
        setItems={setItems}
        triggerActive={triggerActive}
        triggerFlagged={triggerFlagged}
        items={items}
        searchInput={searchInput}
      />
    </Wrapper>
  );
};

export default App;
