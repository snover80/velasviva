import { Box, Center, Flex, Square, Image } from "@chakra-ui/react";
import questionBackground from "../../assets/QuestionsBackground.webp";
import FAQAccordion from "./FAQAccordion";
import FAQHeader from "./FAQHeader";
import brillin from "../../assets/BrillinQuestions.webp";

export interface AccordionInfo {
  title: string;
  text: string[];
}

function AccordingGrid() {
  const accordionInfo: AccordionInfo[] = [
    {
      title: "¿Cuánto se demora en llegar mi pedido",
      text: [
        "Si estás en Bogotá, puedes elegir entre:",
        "1.Envío a domicilio por mensajería interrapidísimo (se debe pagar con anticipacion)",
        "2. Recoger tu pedido en tienda",
        "3.Envío a domicilio pago contra entrega (Se realizan entregas los días sábados)",
        "Para envíos nacionales, el envío tarda entre 2 y 3 días hábiles. Se deben pagar con anticipación, se realizan los envíos por mensajería interapidísimo.",
      ],
    },
    {
      title: "¿En dónde se encuentran ubicados",
      text: [
        "Estamos ubicados en Bogotá, barrio Valladolid. Atendemos a puerta cerrada, puedes llegar cuando gustes de acuerdo a nuestro horarios laborales.",
        "Carrera 82a #8c -16",
      ],
    },
    {
      title: "¿Cuál es el horario de atención",
      text: [
        "Horario presencial:",
        "Domingo a viernes",
        "9:00am - 6:00pm",
        "",
        "Sábados",
        "No tenemos atención presencial",
        "",
        "Horario vía WhatsApp:",
        "Domingo a domingo",
        "8:00am - 10:30pm ",
        "💬 +57 300 8244616",
      ],
    },
    { title: "¿Qué métodos de pago manejan?", text: ["texto de prueba"] },
  ];

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
