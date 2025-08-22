import { Box, Flex, HStack, Image, Link } from "@chakra-ui/react";
import CustomIcon from "./CustomIcon";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import LinksList from "./LinksList";
import whiteLogo from "../assets/WhiteLogo.webp";

function Footer() {
  const pageLinks = ["Inicio", "Productos", "Blog", "Catálogo"];
  const legalLinks = [
    "Políticas de envío",
    "Políticas de reembolso",
    "Términos y condiciones",
    "Recomendaciones de uso",
  ];
  return (
    <>
      <footer>
        <Flex color="#FFFFFF">
          <HStack
            marginTop="10px"
            marginBottom="15px"
            spacing="0"
            width="100%"
            justifyContent="space-between"
          >
            <Box paddingX="100px">
              <Image src={whiteLogo} boxSize="100px" />
            </Box>
            <Box>
              <LinksList items={pageLinks} />
            </Box>
            <Box>
              <LinksList items={legalLinks} />
            </Box>
            <Box alignContent="end" paddingX="40px">
              <Link
                href="https://www.facebook.com/p/Velas-Viva-61557475555386/"
                marginTop={1}
              >
                <CustomIcon icon={SlSocialFacebook} />
              </Link>
              <Link href="https://www.instagram.com/velasviva" marginTop={1}>
                <CustomIcon icon={SlSocialInstagram} />
              </Link>
            </Box>
          </HStack>
        </Flex>
      </footer>
    </>
  );
}

export default Footer;
