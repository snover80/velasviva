import { Center, Heading } from "@chakra-ui/react";

import DecorativeLine from "../DecorativeLine";

function FAQHeader() {
  return (
    <>
      <Center>
        <Heading marginTop="20px" fontSize="2xl" color="#4A5721">
          PREGUNTAS FRECUENTES
        </Heading>
      </Center>
      <Center>
        <DecorativeLine />
      </Center>
    </>
  );
}

export default FAQHeader;
