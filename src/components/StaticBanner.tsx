import { Flex, HStack, Link, Text } from "@chakra-ui/react";
import { CiDeliveryTruck } from "react-icons/ci";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import CustomIcon from "./CustomIcon";

function StaticBanner() {
  return (
    <Flex
      height={50}
      justifyContent="space-between"
      alignContent="center"
      bg="#4A5721"
    >
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
        <Link
          href="https://www.facebook.com/p/Velas-Viva-61557475555386/"
          marginTop={1}
        >
          <CustomIcon icon={SlSocialFacebook} />
        </Link>
        <Link href="https://www.instagram.com/velasviva" marginTop={1}>
          <CustomIcon icon={SlSocialInstagram} />
        </Link>
      </HStack>
    </Flex>
  );
}

export default StaticBanner;
