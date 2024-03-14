import { useState } from "react";
import { Button, Flex, Input } from "@chakra-ui/react";
import { GrTableAdd, GrMapLocation } from "react-icons/gr";

export default function SearchBar({ onSearchTable, onSearchMap }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearchTable(searchTerm);
  };

  return (
    <Flex gap="2" mb={8}>
      <Input
        id="buscarNaTabela"
        placeholder="Digite o nome do país que deseja buscar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button
        type="submit"
        leftIcon={<GrTableAdd />}
        color="white"
        bg="lightBG"
        _hover={{ bg: "darkBG" }}
        fontWeight="normal"
        onClick={handleSearch}
      >
        Tabela
      </Button>
      <Button
        onClick={onSearchMap}
        leftIcon={<GrMapLocation />}
        color="white"
        bg="lightBG"
        _hover={{ bg: "darkBG" }}
        fontWeight="normal"
      >
        Mapa
      </Button>
    </Flex>
  );
}

const Search = ({ onSearch, onClear }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearch = () => {
      onSearch(searchTerm);
    };
  
    const handleClear = () => {
      setSearchTerm('');
      onClear();
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="Digite o nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Pesquisar</button>
        <button onClick={handleClear}>Limpar</button>
      </div>
    );
  };
