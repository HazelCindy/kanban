import React from "react";
import Container from "@material-ui/core/Container";

const MainLayout = ({ children }) => {
    return (
        <main>
            <Container maxWidth="xl">
                {children}
            </Container>
        </main>
    )
};

export default MainLayout;
