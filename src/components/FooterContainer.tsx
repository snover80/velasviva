import { Flex } from "@chakra-ui/react";
import { type ReactNode } from "react";

interface FooterContainerProps {
  children: ReactNode;
}
function FooterContainer({ children }: Readonly<FooterContainerProps>) {
  return (
    <Flex justify="center" align="center" margin={15}>
      {children}
    </Flex>
  );
}

export default FooterContainer;
