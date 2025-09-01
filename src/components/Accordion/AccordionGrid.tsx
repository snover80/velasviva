import { Box, Center, Flex, Image, Square } from "@chakra-ui/react";
import accordionInfo from "../../data/AccordionInfo";
import FAQAccordion from "./FAQAccordion";
import FAQHeader from "./FAQHeader";

function AccordingGrid() {
  return (
    <Flex
      backgroundImage="/photos/QuestionsBackground.webp"
      backgroundRepeat="no-repeat"
    >
      <Square flex="1 1 40%">
        <Center padding="10px">
          <Image
            src="/photos/BrillinQuestions.webp"
            height="350px"
            loading="lazy"
          ></Image>
        </Center>
      </Square>
      <Box flex="1 1 60%">
        <FAQHeader />
        <FAQAccordion accordionInfo={accordionInfo} />
      </Box>
    </Flex>
  );
}

export default AccordingGrid;
