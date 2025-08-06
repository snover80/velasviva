import { Box, Button, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Category } from "./CategoriesGrid";
import "./Card.css";

interface CategoriesCardProps {
  category: Category;
}

function CategoriesCard({ category }: CategoriesCardProps) {
  return (
    <>
      <Card maxW="265px" bg="transparent" boxShadow="none" borderRadius="md">
        <Image src={category.image} borderRadius="10px" boxSize="265px" />
        <CardBody>
          <Box className="box-structure" minH="45px" marginTop="0px">
            <Heading className="white-text" fontSize="md" textAlign="center">
              {category.title}
            </Heading>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button bg="#EC8C44" color="#FFFFFF" marginTop="10px">
              Ver Productos
            </Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default CategoriesCard;
