import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
//import Tab from "@material-ui/core/Tab";

  
function Servet() {
  const Servetbutton = { marginTop: 100 };
  return (
      <ListItem
            button
            key="Servet"
            className={`${classes.item} ${classes.user}`}
          >
            <ListItemIcon className={classes.itemIcon}>
              <AccountCircleOutlinedIcon
                fontSize="large"
                className={classes.icon}
              />
            </ListItemIcon>
            <ListItemText
              primary="Servet"
              className={classes.itemText}
              disableTypography
            />
          </ListItem>  );
}

export default Servet;