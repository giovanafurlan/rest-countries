import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Main() {
  const color = useColorModeValue("dark", "light");
  const bg = useColorModeValue("lightBG", "darkBG");

  return (
    <Box bgColor={bg} w="100%">
      <Container maxW="container.lg" display={"flex"} alignItems={"center"}>
        <Image
          w="auto"
          h="auto"
          p={20}
          src={"/images/share.svg"}
          alt="Um globo terrestre cercado por pessoas enviando imagens e uma garota no topo sentada com um notebook"
        />
        <VStack align={"start"} gap={4}>
          <Heading as={"h1"} fontSize={"7xl"} color={color}>
            Explorador Global
          </Heading>
          <Text fontSize={"lg"}>
            Explore o mundo além das fronteiras, um guia interativo. Mergulhe em
            uma experiência dinâmica e enquanto descobre informações geográficas
            essenciais e curiosidades cativantes sobre os diferentes países do
            planeta.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}
