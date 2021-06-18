import React from "react";
import Container from "@material-ui/core/Container";
import Topbar from "./Topbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Topbar />
      <main>
        <Container maxWidth="xl">{children}</Container>
      </main>
    </div>
  );
};

export default MainLayout;
