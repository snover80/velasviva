import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import type { AccordionInfo } from "./AccordingGrid";

interface FAQAccordionProps {
  accordionInfo: AccordionInfo[];
}

function FAQAccordion({ accordionInfo }: FAQAccordionProps) {
  return (
    <Box padding="15px" marginTop="15px">
      <Accordion allowToggle color="#4A5721">
        {accordionInfo.map((information) => (
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  {information.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {information.text.map((raw) => (
                <Text fontSize="sm" margin="5px">
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
