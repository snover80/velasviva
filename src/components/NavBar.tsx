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
    >
      <Image src={colorLogo} h="90px" objectFit="contain" />
      <NavButton>Inicio</NavButton>
      <NavButton>Productos</NavButton>
      <NavButton>Blog</NavButton>
      <NavButton>Contacto</NavButton>
    </HStack>
  );
}

export default NavBar;
