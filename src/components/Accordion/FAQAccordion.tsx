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
    <Box padding="15px" marginTop="15px" width="600px">
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
              {information.text.map((raw, index) => (
                <Text key={index} fontSize="sm" margin="5px">
                  {raw}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
}

export default FAQAccordion;
