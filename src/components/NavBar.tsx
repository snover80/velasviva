import { HStack, Image } from "@chakra-ui/react";
import colorLogo from "../assets/ColorLogo.webp";
import NavButton from "./NavButton";

function NavBar() {
  return (
    <HStack
      spacing={10}
      paddingX="100px"
      justifyContent="space-between"
      bg="#FFFFFF"
      shadow="md"
    >
      <Image src={colorLogo} h="90px" objectFit="contain" />
      <NavButton path="/">Inicio</NavButton>
      <NavButton path="/products">Productos</NavButton>
      <NavButton path="/blog">Blog</NavButton>
      <NavButton path="/contact">Contacto</NavButton>
    </HStack>
  );
}

export default NavBar;
