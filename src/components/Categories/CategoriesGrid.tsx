import { Center, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import CategoriesCard from "./CategoriesCard";
import virgin from "../../assets/Virgin.webp";
import flowers from "../../assets/Flowers.webp";
import christmas from "../../assets/Christmas.webp";
import bars from "../../assets/Bars.webp";
import "./Card.css";
import DecorativeLine from "../DecorativeLine";

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
    {
      title: "Kits espirituales velas viva",
      image: bars,
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
          {categories.map((category, index) => (
            <CategoriesCard key={index} category={category} />
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
}

export default CategoriesGrid;
