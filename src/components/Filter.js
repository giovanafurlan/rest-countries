import { Button, Flex, Input } from "@chakra-ui/react";
import React from "react";

export default function Filter({ filterText, onFilter, onClear }) {
  return (
    <Flex>
      <Input
        id="search"
        type="text"
        placeholder="Filtrar por nome"
        aria-label="Campo de busca"
        value={filterText}
        onChange={onFilter}
      />
      <Button variant={""} onClick={onClear}>
        X
      </Button>
    </Flex>
  );
}
