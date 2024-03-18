import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import { GrCircleInformation } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";
import CustomTable from "./CustomTable";

export default function Historic({ searchAgain }) {
  const color = useColorModeValue("dark", "light");

  const [searchTerms, setSearchTerms] = useState([]);

  const columns = [
    {
      name: "País",
      selector: (row) => (row ? row?.country : ""),
      sortable: false,
    },
    {
      name: "Horário",
      selector: (row) => (row ? row?.time : ""),
      sortable: true,
    },
    {
      name: "Acessar",
      cell: (row) => (
        <Button
          onClick={() => searchAgain(row.country, row.type)}
          bg="none"
          _hover={{ bg: "none" }}
        >
          <MdArrowOutward color={"#8da0eb"} />
        </Button>
      ),
      button: true,
      sortable: false,
    },
  ];

  useEffect(() => {
    const storedSearchTerms =
      JSON.parse(localStorage.getItem("searchTerms")) || [];
    console.log("storedSearchTerms", storedSearchTerms);
    setSearchTerms(storedSearchTerms);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedSearchTerms =
        JSON.parse(localStorage.getItem("searchTerms")) || [];
      setSearchTerms(storedSearchTerms);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Box pb={10}>
      <Heading color={color} textAlign={"center"} mb={4}>
        Histórico
      </Heading>
      {searchTerms?.length === 0 ? (
        <Flex gap={2} justifyContent={"center"} align={"center"}>
          <GrCircleInformation />
          <Heading color={color} as={"h3"} fontSize={"2xl"}>
            Você ainda não realizou uma busca
          </Heading>
        </Flex>
      ) : (
        <CustomTable data={searchTerms ? searchTerms : []} columns={columns} />
      )}
    </Box>
  );
}
