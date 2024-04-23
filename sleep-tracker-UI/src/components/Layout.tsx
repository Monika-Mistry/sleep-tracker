import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type LayoutProps = {
  children: ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Sleep Tracker
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" sx={{ paddingTop: "3rem !important" }}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
