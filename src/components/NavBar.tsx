import { HStack, Image } from "@chakra-ui/react";
import NavButton from "./NavButton";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <HStack
      spacing={10}
      paddingX="100px"
      justifyContent="space-between"
      bg="#FFFFFF"
      shadow="md"
    >
      <Link to="/">
        <Image
          src="/photos/ColorLogo.webp"
          h="90px"
          objectFit="contain"
          loading="lazy"
        />
      </Link>
      <NavButton path="/">Inicio</NavButton>
      <NavButton path="/products">Productos</NavButton>
      <NavButton path="/blog">Blog</NavButton>
      <NavButton path="/contact">Contacto</NavButton>
    </HStack>
  );
}

export default NavBar;
