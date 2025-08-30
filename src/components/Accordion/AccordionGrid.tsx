import { Box, Center, Flex, Square, Image } from "@chakra-ui/react";
import questionBackground from "../../assets/QuestionsBackground.webp";
import FAQAccordion from "./FAQAccordion";
import FAQHeader from "./FAQHeader";
import brillin from "../../assets/BrillinQuestions.webp";
import accordionInfo from "../../data/AccordionInfo";

function AccordingGrid() {
  return (
    <Flex backgroundImage={questionBackground} backgroundRepeat="no-repeat">
      <Square flex="1 1 40%">
        <Center padding="10px">
          <Image src={brillin} height="350px"></Image>
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
