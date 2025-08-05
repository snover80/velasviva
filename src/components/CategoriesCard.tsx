import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  VStack,
} from "@chakra-ui/react";
import type { Category } from "./CategoriesGrid";

interface CategoriesCardProps {
  category: Category;
}

function CategoriesCard({ category }: CategoriesCardProps) {
  return (
    <>
      <Card
        w="100%"
        bg="transparent"
        boxShadow="none"
        borderRadius="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
      >
        <VStack spacing="5px" align="center">
          <Image
            src={category.image}
            boxSize="200px"
            objectFit="cover"
            borderRadius="10px"
          />
        </VStack>
        <CardBody>
          <VStack spacing="5px" align="center">
            <Box
              h="60px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Heading
                fontSize="md"
                textAlign="center"
                fontFamily="'Josefin Sans Variable', sans-serif"
                color="#FFFFFF"
              >
                {category.title}
              </Heading>
            </Box>
            <Button
              bg="#EC8C44"
              paddingX="20px"
              color="#FFFFFF"
              fontFamily="'Josefin Sans Variable', sans-serif"
            >
              Ver Todo
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </>
  );
}

export default CategoriesCard;
