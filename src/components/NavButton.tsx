import { Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
  color?: string;
}

function NavButton({ children, color }: NavButtonProps) {
  return (
    <Button
      position="relative"
      top="5px"
      fontSize="sm"
      variant="link"
      textColor={color || "#4A5721"}
    >
      {children}
    </Button>
  );
}

export default NavButton;
