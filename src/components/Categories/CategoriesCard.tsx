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
import { useState, useEffect } from "react";

interface CategoriesCardProps {
  category: Category;
}

function CategoriesCard({ category }: Readonly<CategoriesCardProps>) {
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [category.image]);
  return (
    <Card
      maxW={["90vw", "200px", "265px"]}
      w="100%"
      bg="transparent"
      boxShadow="none"
      borderRadius="md"
    >
      <Skeleton
        isLoaded={imgLoaded}
        borderRadius="10px"
        width={["90vw", "200px", "265px"]}
        height={["90vw", "200px", "265px"]}
      >
        <Link to={`/products/${category.categoryName}`}>
          <Image
            src={category.image}
            borderRadius="10px"
            boxSize={["90vw", "200px", "265px"]}
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
