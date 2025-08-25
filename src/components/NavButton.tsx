import { Button } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavButtonProps {
  children: ReactNode;
  color?: string;
}

function NavButton({ children, color }: NavButtonProps) {
  return (
    <Link to="/">
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
