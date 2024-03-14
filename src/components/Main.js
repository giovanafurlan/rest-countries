import { Box, HStack, Heading, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";

export default function Main() {
  const bg = useColorModeValue("lightBG", "darkBG");

  return (
    <HStack bgColor={bg}>
      <Image
        w="auto"
        h="auto"
        p={20}
        src={"/images/share.svg"}
        alt="Um globo terrestre cercado por pessoas enviando imagens e uma garota no topo sentada com um notebook"
      />
      <VStack align={"start"} gap={8}>
      <Heading as={"h1"}>Lorem</Heading>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </VStack>
    </HStack>
  );
}
