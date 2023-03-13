import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function CountriesListItem({ item, selectOption }) {
  return (
    <ListItem>
      <ListItemText primary={item.country} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => selectOption(item.country)} size="large">
          <CheckIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

CountriesListItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default React.memo(CountriesListItem);
