import { Flex, Image } from "@chakra-ui/react";

function MainBanner() {
  return (
    <Flex
      justifyContent="center"
      minHeight={{ base: "100px", md: "200px", lg: "200px" }}
    >
      <Image
        src="/photos/mainBanner.webp"
        objectFit="contain"
        h="100%"
        w="auto"
        loading="lazy"
      ></Image>
    </Flex>
  );
}

export default MainBanner;
