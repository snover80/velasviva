import { Center, Heading, VStack } from "@chakra-ui/react";
import DecorativeLine from "../DecorativeLine";
import { useParams } from "react-router-dom";

function ProductListHeader() {
  const { categoryName } = useParams();
  const title = categoryName?.replace(/-/g, " ");
  return (
    <VStack>
      <Center>
        <Heading marginTop="20px" fontSize="2xl" color="#4A5721">
          {title?.toUpperCase()}
        </Heading>
      </Center>
      <DecorativeLine />
    </VStack>
  );
}

export default ProductListHeader;
