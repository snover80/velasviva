import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Josefin Sans Variable', sans-serif`,
    body: `'Josefin Sans Variable', sans-serif`,
  },
  styles: {
    global: {
      body: {
        bg: "#4A5721",
      },
    },
  },
});

export default theme;
