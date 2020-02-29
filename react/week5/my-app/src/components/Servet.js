import React from "react";
import ListItem from "@material-ui/core/ListItem";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Tab from "@material-ui/core/Tab";

function Servet() {
  const Servetbutton = { marginTop: 100 };
  return (
    <ListItem style={Servetbutton}>
      <Tab icon={<AccountCircleOutlinedIcon />} label="Servet" />
    </ListItem>
  );
}

export default Servet;