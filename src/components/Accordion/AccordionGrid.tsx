import { Box, Center, Flex, Image, Square } from "@chakra-ui/react";
import brillin from "../../assets/BrillinQuestions.webp";
import questionBackground from "../../assets/QuestionsBackground.webp";
import accordionInfo from "../../data/AccordionInfo";
import FAQAccordion from "./FAQAccordion";
import FAQHeader from "./FAQHeader";

function AccordingGrid() {
  return (
    <Box
      w="100%"
      backgroundImage={questionBackground}
      backgroundRepeat="no-repeat"
    >
      <Box w="100%" textAlign="center" mb={4}>
        <FAQHeader />
      </Box>
      <Flex>
        <Square flex="1 1 40%">
          <Center>
            <Image src={brillin} height="350px" loading="lazy"></Image>
          </Center>
        </Square>
        <Box flex="1 1 60%">
          <FAQAccordion accordionInfo={accordionInfo} />
        </Box>
      </Flex>
    </Box>
  );
}

export default AccordingGrid;
