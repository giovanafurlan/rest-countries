import { useState } from "react";
import { Button, Checkbox, CheckboxGroup, Flex, Input } from "@chakra-ui/react";
import { GrSearch } from "react-icons/gr";

export default function SearchBar({ onSearch, onChangeType }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [optionType, setOptionType] = useState([]);

  const handleSearch = () => {
    onSearch(searchTerm, optionType); // Passar tanto o termo de pesquisa quanto o tipo selecionado
    setOptionType([]); // Limpar optionType após a busca
  };

  const handleTypeChange = (types) => {
    setOptionType(types); // Atualizar o estado optionType
  };

  return (
    <Flex gap="1" mb={8}>
      <Input
        id="buscarNaTabela"
        placeholder="Digite o nome do país que deseja buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <CheckboxGroup value={optionType} onChange={handleTypeChange}>
        <Checkbox value={"tabela"} colorScheme="purple">
          Tabela
        </Checkbox>
        <Checkbox value={"mapa"} colorScheme="purple">
          Mapa
        </Checkbox>
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
