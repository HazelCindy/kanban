import React from "react";
import Container from "@mui/material/Container";
import Topbar from "./Topbar";

function MainLayout({ children }) {
  return (
    <div>
      <Topbar />
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
    </div>
  );
}

export default MainLayout;
