import { Center, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import CategoriesCard from "./CategoriesCard";

import DecorativeLine from "../DecorativeLine";
import "./Card.css";

import categories from "../../data/Categories";

function CategoriesGrid() {
  return (
    <VStack
      spacing="0"
      align="center"
      w="100%"
      px={{ base: "10px", md: "20px" }}
      bg="#4A5721"
    >
      <Center>
        <Heading marginTop="20px" fontSize="2xl" className="white-text">
          NUESTRAS CATEGORÍAS
        </Heading>
      </Center>
      <DecorativeLine />
      <SimpleGrid
        columns={{ sm: 2, md: 3, lg: 4 }}
        paddingY="30px"
        spacing="20px"
      >
        {categories.map((category) => (
          <CategoriesCard key={category.id} category={category} />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default CategoriesGrid;
