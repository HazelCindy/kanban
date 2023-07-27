import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import GetColumnsQuery from "../../../api/graphQueries/GetColumns";
import BreadCrumb from "../../BreadCrumb";
import ListShimmers from "../../shimmers/ListShimmers";
import Cards from "../../Card";
import Columns from "../../Column";

function Kanban() {
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Typography variant="h3">Kanban</Typography>
      <BreadCrumb />
      <GetColumnsQuery loader={<ListShimmers />}>
        {({ getColumns }) => (
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Grid
              container
              columnSpacing={{ xs: 1, md: 2, lg: 2 }}
              rowSpacing={1}
            >
              {/* Display columns once added */}
              {getColumns?.map((board) => (
                <Grid md={2} lg={2.2} key={board?.id}>
                  <DndProvider backend={HTML5Backend}>
                    <Columns title={board?.title} id={board?.id} />
                  </DndProvider>
                </Grid>
              ))}
              {/* Display the add column only if there less than 5 columns present */}
              {(!getColumns || getColumns?.length < 5) && (
                <Grid md={2} lg={2.2} key="*">
                  <Cards column />
                </Grid>
              )}
            </Grid>
          </Box>
        )}
      </GetColumnsQuery>
    </Box>
  );
}
export default Kanban;
