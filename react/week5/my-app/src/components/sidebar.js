import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import NatureOutlinedIcon from "@material-ui/icons/NatureOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import DashbordListItems from "./DashbordListItems";
import Logo from "./Logo";
import { Drawer } from "@material-ui/core";

const drawerWidth = 130;
const useStyles = makeStyles(theme => ({
  root: {
    boxSizing: "border-box",
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    backgroundColor: "#ECEDF1 ",
    border: "none",
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  list: {
    padding: 0,
    position: "relative"
  },
  item: {
    backgroundColor: "#EBECF0",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "20px",
    boxShadow: "-3px -3px 10px rgba(255, 255, 255, 0.8), 3px 3px 15px #C9CBD8",
    color: "rgba(59, 67, 73, 0.75)",
    flexDirection: "column",
    margin: "1em auto",
    padding: "0.5em 0",
    textAlign: "center",
    transition: "none",
    width: "75%",
    "&:focusVisible": {
      backgroundColor: "#EBECF0",
      boxShadow:
        "inset 2px 2px 8px #C9CBD8, inset -3px -3px 10px rgba(255,255,255,0.9)"
    },
    "&:hover": {
      backgroundColor: "#EBECF0",
      boxShadow:
        "inset 2px 2px 8px #C9CBD8, inset -3px -3px 10px rgba(255,255,255,0.9)",
      "& $itemIcon": {
        color: "#73ABD7"
      },
      "& $itemText": {
        color: "#73ABD7"
      }
    },
    "&:selected": {
      backgroundColor: "#EBECF0",
      boxShadow:
        "inset 2px 2px 8px #C9CBD8, inset -3px -3px 10px rgba(255,255,255,0.9)",
      "& $itemIcon": {
        color: "#73ABD7"
      },
      "& $itemText": {
        color: "#73ABD7"
      }
    },
    "&:active": {
      backgroundColor: "#EBECF0",
      "& $itemIcon": {
        color: "#73ABD7"
      },
      "& $itemText": {
        color: "#73ABD7"
      }
    }
  },
  itemIcon: {
    color: "rgba(59, 67, 73, 0.75)",
    justifyContent: "center",
    marginTop: "0.5em",
    padding: "0 0.5em",
  },
  icon: {
    //fontSize: "2.3rem"
  },
  itemText: {
    color: "rgba(59, 67, 73, 0.75)",
    fontSize: "0.9em",
    fontWeight: "300",
    lineHeight: "1.1em",
    margin: "0.5em 0"
  },
  user: {
    bottom: 0,
    left: "17px",
    position: "fixed",
    width: "95px"
  }
}));
  
function Sidebar() {
  const classes = useStyles();

  const [state, setState] = useState(false);
  const list = () => {
    setState(!state);
  };
  return (
    <div className={classes.root}>
    <Drawer className={classes.drawer} variant="permanent" classes={{paper: classes.drawerPaper}} anchor="left">
      <List disablePadding dense className={classes.list}>
        <Logo />
        <ListItem button key="Dashboard" className={classes.item} onClick={list}>
            <ListItemIcon className={classes.itemIcon}>
              <DashboardOutlinedIcon
                fontSize="large"
                className={classes.icon}
              />
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              className={classes.itemText}
              disableTypography
            />
          {state ? <DashbordListItems /> : null}
          </ListItem>
          <ListItem button key="Details" className={classes.item}>
            <ListItemIcon className={classes.itemIcon}>
              <NatureOutlinedIcon fontSize="large" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary="Crop Details"
              className={classes.itemText}
              disableTypography
            />
          </ListItem>
          <ListItem button key="Add" className={classes.item}>
            <ListItemIcon className={classes.itemIcon}>
              <AddCircleOutlineIcon fontSize="large" className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary="Add Crop"
              className={classes.itemText}
              disableTypography
            />
          </ListItem>
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
          </ListItem>
      </List>
      </Drawer>
      </div>
  );
}

export default Sidebar;
