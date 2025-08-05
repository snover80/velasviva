import {
  Box,
  Card,
  SimpleGrid,
  Image,
  CardBody,
  Heading,
} from "@chakra-ui/react";

function CategoriesGrid() {
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 3 }}
      w="100%"
      mx="auto" // This centers it horizontally
      paddingX="20px"
      paddingY="15px"
      spacing="10px"
    ></SimpleGrid>
  );
}

export default CategoriesGrid;
