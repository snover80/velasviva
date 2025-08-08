import "./App.css";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import StaticBanner from "./components/StaticBanner";
import NavBar from "./components/NavBar";
import MainBanner from "./components/MainBanner";
import CategoriesGrid from "./components/Categories/CategoriesGrid";
import TitleAccordion from "./components/Accordion/TitleAccordion";
import AccordingGrid from "./components/Accordion/AccordingGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "banner" "carousel" "categories" "faq" "footer"`,
      }}
      bg="#4A5721"
    >
      <GridItem area="nav">
        <StaticBanner />
      </GridItem>

      <GridItem area="banner" bg="#FFFFFF">
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

      <GridItem area="faq">
        <TitleAccordion />
        <AccordingGrid />
      </GridItem>

      <GridItem area="footer">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
