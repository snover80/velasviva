import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import products from "../../data/products";
import DecorativeLine from "../DecorativeLine";

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  if (!product) return <div>Producto no encontrado</div>;
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "1fr 1fr" }}
      gap={8}
      alignItems="stretch"
      padding="30px"
    >
      <GridItem>
        <Image
          src={product.image}
          alt={product.name}
          borderRadius="10px"
          w="100%"
          maxH="400px"
          objectFit="contain"
        />
      </GridItem>
      <GridItem display="flex" flexDirection="column">
        <Box mb={9}>
          <Heading color="#4A5721" size="lg">
            {product.name.toLocaleUpperCase()}
          </Heading>
          <DecorativeLine />
          <Text fontSize="2xl" color="#4A5721" fontWeight="bold" mt={4}>
            {`$${product.price.toLocaleString("es-CO")}`}
          </Text>
          <Text mb={2} color={"#6C6C6C"}>
            El valor del envío lo cancelaras contra entrega
          </Text>
        </Box>
        <Box flex="1" mb={4}>
          <Text
            key={"what-includes"}
            color="#4A5721"
            fontWeight="bold"
            mb={"5"}
            fontSize={"xl"}
          >
            ¿Qué incluye?
          </Text>
          <UnorderedList>
            {product.description?.map((desc, index) => (
              <ListItem key={index} color="#4A5721" fontSize={"lg"}>
                {desc}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box mt="auto">
          <a
            href={`https://wa.me/573008244616?text=Hola, estoy interesado en el producto ${product.name}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button bg="#50CC5D" color="white">
              Realizar compra por whatsapp
            </Button>
          </a>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default ProductDetail;
