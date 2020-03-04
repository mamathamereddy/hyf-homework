import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const useStyles = makeStyles(theme => ({
  item: {
    borderRadius: "10px",
    fontSize: "0.9em",
    padding: "5px 0",
    textAlign: "center",
    width: "98%",
    "&:focusVisible": {
      backgroundColor: "#EBECF0",
      boxShadow:
        "inset 2px 2px 8px #C9CBD8, inset -3px -3px 10px rgba(255,255,255,0.9)"
    },
    "&:hover": {
      backgroundColor: "#EBECF0",
      boxShadow:
        "inset 2px 2px 8px #C9CBD8, inset -3px -3px 10px rgba(255,255,255,0.9)",
      "& $itemText": {
        color: "#73ABD7"
      }
    },
    "&:selected": {
      backgroundColor: "#EBECF0",
      boxShadow:
        "inset 2px 2px 8px #C9CBD8, inset -3px -3px 10px rgba(255,255,255,0.9)",
      "& $itemText": {
        color: "#73ABD7"
      }
    },
    "&:active": {
      backgroundColor: "#EBECF0",
      "& $itemText": {
        color: "#73ABD7"
      }
    }

  },
  itemText: {
    "&:hover": {
      color: "#73ABD7"
    }


  }
}));

function DashbordListItems() {
  const classes = useStyles();

  const items = ["Temperature", "Humidity", "PH", "EC", "Water"];
  return (
    <div className="dropdown-list-items">
      {items.map((item,i) => (
          <ListItem key={i} button className={classes.item} >
            <ListItemText className={classes.itemText} disableTypography>{item}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
}

export default DashbordListItems;