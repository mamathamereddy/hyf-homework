import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

function DashbordListItems() {

  const dashbordElements = {margin: 40};
  const items = ["Temperature", "Humidity", "PH", "EC", "Water"];
  return (
    <div>
      {items.map((item,i) => (
          <ListItem key={i} button style={dashbordElements}>
          <ListItemText>{item}</ListItemText>
        </ListItem>
      ))}
    </div>
  );
}

export default DashbordListItems;