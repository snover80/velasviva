import { Button } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  children: ReactNode;
  color?: string;
  path: string;
}

function NavButton({ children, color, path }: Readonly<NavButtonProps>) {
  return (
    <Link to={path}>
      <Button
        position="relative"
        top="5px"
        fontSize="sm"
        variant="link"
        textColor={color || "#4A5721"}
      >
        {children}
      </Button>
    </Link>
  );
}

export default NavButton;
