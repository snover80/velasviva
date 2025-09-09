import { Image, Link as LinkC, SimpleGrid } from "@chakra-ui/react";
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl";
import { Link } from "react-router-dom";
import whiteLogo from "../assets/WhiteLogo.webp";
import LegalLinks from "../data/LegalLinks";
import PageLinks from "../data/PageLinks";
import CustomIcon from "./CustomIcon";
import FooterContainer from "./FooterContainer";
import LinksList from "./LinksList";

function Footer() {
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
        <Link to="/">
          <Image src={whiteLogo} boxSize={{ base: "120px" }} loading="lazy" />
        </Link>
      </FooterContainer>

      <FooterContainer>
        <LinksList items={PageLinks} />
      </FooterContainer>

      <FooterContainer>
        <LinksList items={LegalLinks} />
      </FooterContainer>

      <FooterContainer>
        <LinkC href="https://www.facebook.com/p/Velas-Viva-61557475555386/">
          <CustomIcon icon={SlSocialFacebook} />
        </LinkC>
        <LinkC href="https://www.instagram.com/velasviva">
          <CustomIcon icon={SlSocialInstagram} />
        </LinkC>
      </FooterContainer>
    </SimpleGrid>
  );
}

export default Footer;
