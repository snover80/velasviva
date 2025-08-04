import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import StaticBanner from "./components/StaticBanner";

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

      <GridItem area="banner" bg="yellow">
        Banner
      </GridItem>

      <GridItem area="carousel" bg="red">
        Carousel
      </GridItem>

      <GridItem area="categories" bg="blue">
        Categories
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
