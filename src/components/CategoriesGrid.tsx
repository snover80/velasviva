import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import CategoriesCard from "./CategoriesCard";
import virgin from "../assets/Virgin.webp";
import flowers from "../assets/Flowers.webp";
import christmas from "../assets/Christmas.webp";

export interface Category {
  title: string;
  image: string;
}

function CategoriesGrid() {
  const categories: Category[] = [
    {
      title: "Kits y figuras religiosas",
      image: virgin,
    },
    { title: "Kits emprendedores y velas navideñas", image: christmas },
    {
      title: "Velas decorativas, aromatizadas y recordatorios",
      image: flowers,
    },
  ];
  return (
    <>
      <VStack
        spacing="0"
        align="center"
        w="100%"
        px={{ base: "10px", md: "20px" }}
      >
        <Heading
          marginTop="10px"
          fontSize="2xl"
          fontFamily="'Josefin Sans Variable', sans-serif"
          color="#FFFFFF"
        >
          NUESTRAS CATEGORÍAS
        </Heading>
        <Box
          w="40px"
          h="3px"
          bg="#EC8C44"
          borderRadius="full"
          justifyContent="center"
          alignItems="center"
        />
        <SimpleGrid
          columns={{ sm: 2, md: 2, lg: 3 }}
          paddingY="30px"
          spacing="60px"
        >
          {categories.map((category) => (
            <CategoriesCard category={category} />
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default CategoriesGrid;
