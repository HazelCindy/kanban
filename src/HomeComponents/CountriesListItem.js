import React from "react";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

const CountriesListItem = ({ item, selectOption }) => {
  return (
    <ListItem>
      <ListItemText primary={item.country} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => selectOption(item.country)}>
          <CheckIcon fontSize="small" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

CountriesListItem.propTypes = {
  item: PropTypes.object.isRequired,
  selectOption: PropTypes.func.isRequired,
};

export default React.memo(CountriesListItem);
