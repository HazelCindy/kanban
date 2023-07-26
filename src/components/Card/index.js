import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { useMutation } from "@apollo/client";
import { ADD_COLUMN } from "../../api/graphMutations/AddColumn";
import { ADD_TASK } from "../../api/graphMutations/AddTask";
import { GET_TASKS } from "../../api/graphQueries/GetTasks";
import { GET_COLUMNS } from "../../api/graphQueries/GetColumns";

function Cards({ column = false, columnId = "" }) {
  const [cardName, setCardName] = React.useState("");
  const [addCard, setAddCard] = React.useState(false);
  const [errorMessage, setError] = React.useState(false);
  // Mutation to add a new column
  const [addColumn] = useMutation(ADD_COLUMN);

  const [addTask] = useMutation(ADD_TASK);

  const handleAdd = (name) => {
    if (name !== "") {
      if (column) {
        addColumn({
          variables: { title: name },
          // refetch the columns
          refetchQueries: [GET_COLUMNS, "getColumns"],
        });
      } else {
        addTask({
          variables: { columnId, description: name },
          refetchQueries: [GET_TASKS, "getTasks"],
        });
      }
      setCardName("");
      setAddCard(false);
    }
  };

  return (
    <Card sx={{ maxWidth: "inherit", backgroundColor: "white" }}>
      {addCard && (
        <Box
          sx={{
            "& .MuiTextField-root": { m: "10px", width: "90%" },
          }}
          component="form"
        >
          <TextField
            id={
              errorMessage ? "outlined-error-helper-text" : "outlined-required"
            }
            label={column ? "Name" : "Title"}
            error={errorMessage}
            helperText={errorMessage ? "Please add title" : ""}
            value={cardName}
            onChange={(e) => {
              setCardName(e.target.value);
              setError(false);
            }}
          />
        </Box>
      )}

      <CardActions>
        {addCard ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Button onClick={() => setAddCard(false)}>Cancel</Button>
            <Button
              sx={{
                backgroundColor: "rgb(100, 112, 205)",
                color: "white",
                width: "sm",
              }}
              onClick={() => {
                handleAdd(cardName);
              }}
            >
              Add
            </Button>
          </Box>
        ) : (
          <Button
            sx={{
              display: "flex",
              width: "100%",
              height: "40px",
              alignItems: "center",
              justifySelf: "center",
            }}
            onClick={() => setAddCard(true)}
          >
            {column ? "Add Column" : " Add Card"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
export default Cards;
