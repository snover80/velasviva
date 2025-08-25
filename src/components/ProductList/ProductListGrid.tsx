import { SimpleGrid } from "@chakra-ui/react";
import ProductListCard from "./ProductListCard";
import flowers from "../../assets/Flowers.webp";

export interface ProductPerCategory {
  name: string;
  image: string;
}
function ProductListGrid() {
  const productsPerCategory: ProductPerCategory[] = [
    {
      name: "Kits y figuras religiosas",
      image: flowers,
    },
    { name: "Kits emprendedores y velas navideñas", image: flowers },
    {
      name: "Velas decorativas, aromatizadas y recordatorios",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
    {
      name: "Kits espirituales velas viva",
      image: flowers,
    },
  ];
  return (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4 }}
      paddingY="30px"
      paddingX="30px"
      spacing="20px"
    >
      {productsPerCategory.map((category) => (
        <ProductListCard productsPerCategory={category} />
      ))}
    </SimpleGrid>
  );
}

export default ProductListGrid;
