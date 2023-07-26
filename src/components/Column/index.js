import * as React from "react";
import { useDrop } from "react-dnd";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import { useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Cards from "../Card";
import Task from "../Task";
import GetTasksQuery from "../../api/graphQueries/GetTasks";
import ListShimmers from "../shimmers/ListShimmers";
import { DELETE_COLUMN } from "../../api/graphMutations/DeleteColumn";
import { CLEAR_TASKS } from "../../api/graphMutations/ClearTasks";
import { UPDATE_COLUMNS } from "../../api/graphMutations/RenameColumn";
import { UPDATE_TASKS } from "../../api/graphMutations/UpdateTask";
import { GET_TASKS } from "../../api/graphQueries/GetTasks";
import { GET_COLUMNS } from "../../api/graphQueries/GetColumns";

function Columns({ id = "", title, tasks }) {
  const [columnUpdate, setColumnUpdate] = React.useState({
    rename: {
      edit: false,
      name: "",
    },
    clear: false,
    delete: false,
  });

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // // Mutations for a single column
  const [deleteColumn] = useMutation(DELETE_COLUMN);
  const [clearTasks] = useMutation(CLEAR_TASKS);
  const [updateColumn] = useMutation(UPDATE_COLUMNS);
  const [updateTask] = useMutation(UPDATE_TASKS);

  // handle drag and drop to a separate column
  const [, drop] = useDrop({
    accept: "task",
    drop: (item) => {
      if (item.columnID !== id) {
        updateTask({
          variables: {
            columnId: id,
            description: item.description,
            updateTaskId: item.id,
          },
          // refetch the tasks
          refetchQueries: [GET_TASKS, "getTasks"],
        });
      }
    },
  });

  // handle opening the more menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // handle closing the menu
  const handleClose = () => {
    setAnchorEl(null);
  };
  // handle the renaming of a column
  const handleRename = () => {
    setColumnUpdate({
      ...columnUpdate,
      rename: {
        edit: true,
        name: "",
      },
    });
  };

  // handling deleting a column
  const handleDelete = () => {
    deleteColumn({
      variables: { deleteColumnId: id },
      // refetch the columns
      refetchQueries: [GET_COLUMNS, "getColumns"],
    });
    setAnchorEl(null);
  };
  // handle clearing the tasks in a column
  const handleClear = () => {
    clearTasks({
      variables: { columnId: id },
      // refetch the tasks
      refetchQueries: [GET_TASKS, "getTasks"],
    });
    setAnchorEl(null);
  };

  return (
    <Card sx={{ maxWidth: "inherit", backgroundColor: "white" }} ref={drop}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "95%",
          height: columnUpdate.rename.edit ? "100px" : "60px",
          alignItems: "center",
          mx: "10px",
        }}
      >
        {columnUpdate.rename.edit ? (
          <Box
            sx={{
              display: "block",
            }}
          >
            <TextField
              variant="outlined"
              value={title}
              size="small"
              onChange={(e) => {
                columnUpdate["rename"].name = e.target.value;
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                onClick={() =>
                  setColumnUpdate({
                    ...columnUpdate,
                    rename: {
                      edit: false,
                      name: "",
                    },
                  })
                }
              >
                Cancel
              </Button>
              <Button
                sx={{
                  backgroundColor: "rgb(100, 112, 205)",
                  color: "white",
                  width: "sm",
                }}
                onClick={() => {
                  updateColumn({
                    variables: {
                      updateColumnId: id,
                      title: columnUpdate["rename"].name,
                    },
                    // refetch the tasks
                    refetchQueries: [GET_COLUMNS, "Columns"],
                  });
                }}
              >
                Add
              </Button>
            </Box>
          </Box>
        ) : (
          <Typography>{title}</Typography>
        )}

        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreHorizIcon />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleRename}>Rename</MenuItem>
          <MenuItem onClick={handleClear}>Clear</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
      </Box>
      <GetTasksQuery variables={{ columnId: id }} loader={<ListShimmers />}>
        {({ getTasks }) =>
          getTasks?.length === 0 ? (
            <Task description="" />
          ) : (
            getTasks?.map((task, index) => (
              <Task
                description={task?.description}
                columnId={id}
                id={task?.id}
                key={task?.id}
                index={index}
              />
            ))
          )
        }
      </GetTasksQuery>

      <Cards columnId={id} />
    </Card>
  );
}
Columns.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Columns;
