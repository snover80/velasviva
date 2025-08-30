import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import StaticBanner from "../components/StaticBanner";
import { Box, Grid } from "@chakra-ui/react";

function Layout() {
  return (
    <Grid templateRows="auto auto 1fr auto" minH="100vh">
      <Box as="header">
        <StaticBanner />
      </Box>

      <Box>
        <NavBar />
      </Box>

      <Box as="main">
        <Outlet />
      </Box>

      <Box as="footer">
        <Footer />
      </Box>
    </Grid>
  );
}

export default Layout;
