import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

function CountrySearchTextField({ handleChange }) {
  return (
    <TextField
      fullWidth
      style={{ width: "100%" }}
      label="Component"
      margin="normal"
      name="component"
      autoComplete="off"
      onChange={handleChange}
      variant="outlined"
    />
  );
}

CountrySearchTextField.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default React.memo(CountrySearchTextField);
