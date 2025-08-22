import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource-variable/josefin-sans";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import route from "./routes.tsx";
import theme from "./theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={route} />
    </ChakraProvider>
  </StrictMode>
);
