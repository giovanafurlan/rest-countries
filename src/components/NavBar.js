import React from "react";
import { Box } from "@chakra-ui/react";
import DarkLight from "./DarkLight";

export default function NavBar({ children }) {
  return (
    <Box pos={"relative"} w="full">
      {/* <DarkLight /> */}
      {children}
    </Box>
  );
}
