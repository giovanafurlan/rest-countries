import { useState } from "react";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Input,
  Select,
} from "@chakra-ui/react";
import { GrSearch } from "react-icons/gr";

export default function SearchBar({ onSearch, optionType }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <Flex gap="2" mb={8}>
      <Input
        id="buscarNaTabela"
        placeholder="Digite o nome do país que deseja buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CheckboxGroup onChange={optionType}>
        <Checkbox value={"tabela"} colorScheme="purple">Tabela</Checkbox>
        <Checkbox value={"mapa"} colorScheme="purple">Mapa</Checkbox>
      </CheckboxGroup>
      <Button
        type="submit"
        leftIcon={<GrSearch />}
        color="white"
        bg="lightBG"
        _hover={{ bg: "darkBG" }}
        fontWeight="normal"
        onClick={handleSearch}
      >
        Buscar país
      </Button>
    </Flex>
  );
}
