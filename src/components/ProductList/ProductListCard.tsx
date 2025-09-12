import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import type { ProductPerCategory } from "../../entities/ProductPerCategory";
import { Link } from "react-router-dom";

interface ProductListCardProps {
  productsPerCategory: ProductPerCategory;
}

function ProductListCard({
  productsPerCategory,
}: Readonly<ProductListCardProps>) {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [productsPerCategory.image]);
  return (
    <Card bg="transparent" boxShadow="none" borderRadius="md">
      <CardBody>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Skeleton
            isLoaded={imgLoaded}
            borderRadius="10px"
            width={{ base: "340px", sm: "255px", md: "300px" }}
            height={{ base: "340px", sm: "255px", md: "300px" }}
          >
            <Link to={`/product/${productsPerCategory.id}`}>
              <Image
                src={productsPerCategory.image}
                borderRadius="10px"
                boxSize={{ base: "340px", sm: "255px", md: "300px" }}
                onLoad={() => setImgLoaded(true)}
                loading="lazy"
              />
            </Link>
          </Skeleton>
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
          <Link to={`/product/${productsPerCategory.id}`}>
            <Button bg="#EC8C44" color="#FFFFFF" marginTop="10px">
              Ver Producto
            </Button>
          </Link>
        </Box>
      </CardBody>
    </Card>
  );
}

export default ProductListCard;
