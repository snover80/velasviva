import { SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductListCard from "./ProductListCard";

export interface ProductPerCategory {
  name: string;
  image: string;
}
function ProductListGrid() {
  const { categoryName } = useParams();
  const { data: products, error, isLoading } = useProducts(categoryName!);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid
      columns={{ sm: 2, md: 2, lg: 3 }}
      paddingY="30px"
      paddingX="30px"
      spacing="20px"
    >
      {products?.map((product) => (
        <ProductListCard key={product.id} productsPerCategory={product} />
      ))}
    </SimpleGrid>
  );
}

export default ProductListGrid;
