import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tab from "@material-ui/core/Tab";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import NatureOutlinedIcon from "@material-ui/icons/NatureOutlined";
import DashbordListItems from "./DashbordListItems";
import Servet from "./Servet";
import Logo from "./Logo";

function Sidebar() {
  const [state, setState] = useState(false);
  const list = () => {
    setState(!state);
  };
  return (
    <>
      <List disablePadding dense className="items">
        <Logo />
        <div className="displayitems">
          <ListItem>
            <Tab
              onClick={list}
              icon={<DashboardOutlinedIcon />}
              label="DashBoard"
            />
          </ListItem>
          {state ? <DashbordListItems /> : null}
          <ListItem>
            <Tab icon={<NatureOutlinedIcon />} label="Crop Details" />
          </ListItem>
          <ListItem>
            <Tab icon={<AddOutlinedIcon />} label="Add Crop" />
          </ListItem>
          <Servet />
        </div>
      </List>
    </>
  );
}

export default Sidebar;
