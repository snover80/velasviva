import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";

import "./Card.css";
import { Link } from "react-router-dom";
import type { Category } from "../../entities/Category";
import { useState } from "react";

interface CategoriesCardProps {
  category: Category;
}

function CategoriesCard({ category }: Readonly<CategoriesCardProps>) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <Card maxW="265px" bg="transparent" boxShadow="none" borderRadius="md">
      <Skeleton
        isLoaded={imgLoaded}
        borderRadius="10px"
        width={{ base: "340px", sm: "255px", md: "300px" }}
        height={{ base: "340px", sm: "255px", md: "300px" }}
      >
        <Link to={`/products/${category.categoryName}`}>
          <Image
            src={category.image}
            borderRadius="10px"
            boxSize="265px"
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
          />
        </Link>
      </Skeleton>

      <CardBody>
        <Box className="box-structure" minH="45px" marginTop="0px">
          <Heading className="white-text" fontSize="md" textAlign="center">
            {category.name}
          </Heading>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Link to={`/products/${category.categoryName}`}>
            <Button bg="#EC8C44" color="#FFFFFF" marginTop="10px">
              Ver Productos
            </Button>
          </Link>
        </Box>
      </CardBody>
    </Card>
  );
}

export default CategoriesCard;
