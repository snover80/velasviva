import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource-variable/josefin-sans";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import route from "./routes.tsx";
import theme from "./theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </ChakraProvider>
  </StrictMode>
);
