import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useDrag, useDrop } from "react-dnd";

function Task({ description = "", id = "", columnId = "" }) {
  const ref = React.useRef(null);
  const [, setTaskName] = React.useState("");
  const [error, setError] = React.useState(false);
  const [, drop] = useDrop({
    accept: "task",
  });
  const [, drag] = useDrag({
    type: "task",
    item: { id, columnId, description, type: "task" },
  });

  drag(drop(ref));

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: "10px", width: "90%", height: "60px" },
      }}
      component="form"
      ref={ref}
    >
      <TextField
        id={error ? "outlined-error-helper-text" : "outlined-required"}
        label="Title"
        error={error}
        aria-readonly
        helperText={error ? "Please add title" : ""}
        value={description}
        InputProps={{
          readOnly: true,
        }}
        onChange={(e) => {
          setTaskName(e.target.value);
          setError(false);
        }}
      />
    </Box>
  );
}

export default Task;
