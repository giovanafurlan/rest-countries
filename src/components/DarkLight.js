import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkLight() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      pos={"absolute"}
      right={0}
      onClick={toggleColorMode}
      bg="none"
      _hover={{ bg: "none" }}
    >
      {colorMode === "light" ? (
        <FaMoon fontSize={20} />
      ) : (
        <FaSun fontSize={20} />
      )}
    </Button>
  );
}
