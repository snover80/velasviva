import { Image, Link, SimpleGrid } from "@chakra-ui/react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import whiteLogo from "../assets/WhiteLogo.webp";
import CustomIcon from "./CustomIcon";
import FooterContainer from "./FooterContainer";
import LinksList from "./LinksList";

function Footer() {
  const pageLinks = ["Inicio", "Productos", "Blog", "Catálogo"];
  const legalLinks = [
    "Políticas de envío",
    "Políticas de reembolso",
    "Términos y condiciones",
    "Recomendaciones de uso",
  ];
  return (
    <SimpleGrid
      w="100%"
      px={{ base: 4, md: 10 }}
      columns={{ base: 2, md: 4 }}
      spacing={{ base: 6, md: 10 }}
      color="#FFFFFF"
      bg="#4A5721"
    >
      <FooterContainer>
        <Image src={whiteLogo} boxSize={{ base: "120px" }} />
      </FooterContainer>

      <FooterContainer>
        <LinksList items={pageLinks} />
      </FooterContainer>

      <FooterContainer>
        <LinksList items={legalLinks} />
      </FooterContainer>

      <FooterContainer>
        <Link href="https://www.facebook.com/p/Velas-Viva-61557475555386/">
          <CustomIcon icon={SlSocialFacebook} />
        </Link>
        <Link href="https://www.instagram.com/velasviva">
          <CustomIcon icon={SlSocialInstagram} />
        </Link>
      </FooterContainer>
    </SimpleGrid>
  );
}

export default Footer;
