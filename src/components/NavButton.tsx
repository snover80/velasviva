import { Button } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface NavButtonProps {
  children: ReactNode;
}

function NavButton({ children }: NavButtonProps) {
  return (
    <Button
      position="relative"
      top="5px"
      fontSize="sm"
      variant="link"
      textColor="#4A5721"
    >
      {children}
    </Button>
  );
}

export default NavButton;
