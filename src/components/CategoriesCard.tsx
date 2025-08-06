import { Box, Button, Card, CardBody, Heading, Image } from "@chakra-ui/react";
import type { Category } from "./CategoriesGrid";

interface CategoriesCardProps {
  category: Category;
}

function CategoriesCard({ category }: CategoriesCardProps) {
  return (
    <>
      <Card maxW="265px" bg="transparent" boxShadow="none" borderRadius="md">
        <Image src={category.image} borderRadius="10px" boxSize="265px" />
        <CardBody>
          <Box
            h="50px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginTop="0px"
          >
            <Heading
              fontSize="sm"
              textAlign="center"
              fontFamily="'Josefin Sans Variable', sans-serif"
              color="#FFFFFF"
            >
              {category.title}
            </Heading>
          </Box>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              bg="#EC8C44"
              paddingX="45px"
              marginTop="5px"
              color="#FFFFFF"
              fontFamily="'Josefin Sans Variable', sans-serif"
              boxSize="30px"
            >
              Ver Todo
            </Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default CategoriesCard;
