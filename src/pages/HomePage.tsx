import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";
import AccordingGrid from "../components/Accordion/AccordingGrid";
import TitleAccordion from "../components/Accordion/TitleAccordion";
import CategoriesGrid from "../components/Categories/CategoriesGrid";
import MainBanner from "../components/MainBanner";

function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: `"carousel" "categories" "faq" `,
      }}
    >
      <GridItem area="carousel">
        <MainBanner />
      </GridItem>

      <GridItem area="categories">
        <Flex minH="300px">
          <CategoriesGrid />
        </Flex>
      </GridItem>

      <GridItem area="faq">
        <Box w="100%">
          <TitleAccordion />
          <AccordingGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default HomePage;
