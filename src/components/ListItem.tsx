import React from 'react';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const UglyListItem = ({text}: {text: string}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default UglyListItem;
