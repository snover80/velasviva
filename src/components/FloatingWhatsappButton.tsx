import { Box } from "@chakra-ui/react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import whiteLogo from "../assets/whiteLogo.webp";

function FloatingWhatsappButton() {
  return (
    <Box>
      <FloatingWhatsApp
        phoneNumber="+573008244616"
        accountName="VelasViva"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar={whiteLogo}
        statusMessage="Generalmente respondemos en menos de 15 minutos."
        chatMessage="Gracias por comunicarte con VelasViva 🤝 ¿Cómo podemos ayudarte?"
        placeholder="Escribe tu mensaje..."
      />
    </Box>
  );
}

export default FloatingWhatsappButton;
