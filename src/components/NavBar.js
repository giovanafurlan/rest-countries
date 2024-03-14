import { Box, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import DarkLight from "./DarkLight";

export default function NavBar({ children }) {
  const bg = useColorModeValue("lightBG", "darkBG");
  return (
    <Box pos={"relative"} w="full" background={bg}>
      <DarkLight />
      <Container maxW="container.lg">{children}</Container>
    </Box>
  );
}
