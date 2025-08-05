import "./App.css";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import StaticBanner from "./components/StaticBanner";
import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import CategoriesGrid from "./components/CategoriesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "banner" "carousel" "categories" "faq" "footer"`,
      }}
    >
      <GridItem area="nav" bg="#4A5721">
        <StaticBanner />
      </GridItem>

      <GridItem area="banner">
        <NavBar />
      </GridItem>

      <GridItem area="carousel">
        <MainBanner />
      </GridItem>

      <GridItem area="categories">
        <Flex minH="300px">
          <CategoriesGrid />
        </Flex>
      </GridItem>

      <GridItem area="faq" bg="orange">
        FAQ
      </GridItem>

      <GridItem area="footer" bg="#4A5721">
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
