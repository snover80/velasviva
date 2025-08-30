import { Box, Button, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { ProductPerCategory } from "./ProductListGrid";

interface ProductListCardProps {
  productsPerCategory: ProductPerCategory;
}
function ProductListCard({
  productsPerCategory,
}: Readonly<ProductListCardProps>) {
  return (
    <Card bg="transparent" boxShadow="none" borderRadius="md">
      <CardBody>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Image
            src={productsPerCategory.image}
            borderRadius="10px"
            boxSize={{ base: "340px", sm: "255px", md: "300px" }}
          />
        </Box>
        <Box className="box-structure" minH="45px" marginTop="11px">
          <Heading
            className="white-text"
            fontSize="md"
            textAlign="center"
            color="#4A5721"
          >
            {productsPerCategory.name}
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button bg="#EC8C44" color="#FFFFFF" marginTop="10px">
            Ver Producto
          </Button>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ProductListCard;
