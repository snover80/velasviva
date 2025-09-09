import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import type { AccordionInfo } from "../../entities/AccordionInfo";

interface FAQAccordionProps {
  accordionInfo: AccordionInfo[];
}

function FAQAccordion({ accordionInfo }: Readonly<FAQAccordionProps>) {
  return (
    <Box padding="10px" marginTop="15px" width="600px">
      <Accordion allowToggle color="#4A5721">
        {accordionInfo.map((information) => (
          <AccordionItem key={information.id}>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {information.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {information.text.map((raw, index) => {
                if (raw === "") {
                  return <Box key={index} h="10px" />;
                }
                if (
                  raw.trim().toLowerCase() === "horario presencial:" ||
                  raw.trim().toLowerCase() === "horario vía whatsapp:"
                ) {
                  return (
                    <Text
                      key={index}
                      fontWeight="bold"
                      fontSize="sm"
                      margin="5px"
                    >
                      {raw}
                    </Text>
                  );
                }
                return (
                  <Text key={index} fontSize="sm" margin="5px">
                    {raw}
                  </Text>
                );
              })}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQAccordion;
