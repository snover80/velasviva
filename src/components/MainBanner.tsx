import { Flex, Image } from "@chakra-ui/react";
import mainBannerImg from "../assets/mainBanner.webp";

function MainBanner() {
  return (
    <Flex
      justifyContent="center"
      minHeight={{ base: "100px", md: "200px", lg: "200px" }}
    >
      <Image src={mainBannerImg} objectFit="contain" h="100%" w="auto"></Image>
    </Flex>
  );
}

export default MainBanner;
