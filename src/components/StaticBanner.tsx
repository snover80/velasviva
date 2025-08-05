import { Flex, HStack, Text } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import CustomIcon from "./CustomIcon";

function StaticBanner() {
  return (
    <>
      <Flex height={50} justifyContent="space-between" alignContent="center">
        <HStack paddingX="100px">
          <CustomIcon icon={CiDeliveryTruck} boxSize={8} />
          <Text
            fontFamily="'Josefin Sans Variable', sans-serif"
            color="#FFFFFF"
            whiteSpace="nowrap"
          >
            Envios a toda Colombia
          </Text>
        </HStack>
        <HStack paddingX={10}>
          <CustomIcon icon={SlSocialFacebook} />
          <CustomIcon icon={SlSocialInstagram} />
        </HStack>
      </Flex>
    </>
  );
}

export default StaticBanner;
