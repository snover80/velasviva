import { Box, Button, Card, CardBody, Heading, Image } from "@chakra-ui/react";

import "./Card.css";
import { Link } from "react-router-dom";
import type { Category } from "../../entities/Category";

interface CategoriesCardProps {
  category: Category;
}

function CategoriesCard({ category }: Readonly<CategoriesCardProps>) {
  return (
    <Card maxW="265px" bg="transparent" boxShadow="none" borderRadius="md">
      <Image src={category.image} borderRadius="10px" boxSize="265px" />
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
