import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";

function StaticBanner() {
  return (
    <>
      <Flex height={50} justifyContent="space-between" alignContent="center">
        <HStack paddingX={40}>
          <Icon as={CiDeliveryTruck} color="#FFFFFF" boxSize={9} />
          <Text
            fontFamily="'Josefin Sans Variable', sans-serif"
            color="#FFFFFF"
            whiteSpace="nowrap"
          >
            Envios a toda Colombia
          </Text>
        </HStack>
        <HStack paddingX={10}>
          <Icon as={SlSocialFacebook} color="#FFFFFF" boxSize={6} />
          <Icon as={SlSocialInstagram} color="#FFFFFF" boxSize={6} />
        </HStack>
      </Flex>
    </>
  );
}

export default StaticBanner;
