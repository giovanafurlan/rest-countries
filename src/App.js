import { useEffect, useState } from "react";
import { getRestCountries } from "./services/restcountries-services";
import "./index.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CustomTable from "./components/CustomTable";
import { Box, Container, useToast } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";
import Historic from "./components/Historic";

function App() {
  const [restCountries, setRestCountries] = useState();
  const [filteredData, setFilteredData] = useState();
  const [popup, setPopup] = useState();
  const [searchTerm, setSearchTerm] = useState([]);
  const [displayTable, setDisplayTable] = useState("none");
  const [displayMap, setDisplayMap] = useState("hidden");

  const toast = useToast();

  async function request() {
    await getRestCountries()
      .then((response) => {
        setRestCountries(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    request();
  }, []);

  const columns = [
    {
      name: "Bandeira",
      selector: (row) => row?.flag,
      sortable: false,
      maxwidth: "200px",
      center: "true",
    },
    {
      name: "Nome",
      selector: (row) => row?.name?.common,
      sortable: true,
      wrap: true,
    },
    {
      name: "População",
      selector: (row) => row?.population,
      sortable: true,
      wrap: true,
    },
    {
      name: "Idioma",
      selector: (row) => {
        const firstLanguageKey = Object.keys(row.languages)[0];
        return row.languages[firstLanguageKey];
      },
      sortable: true,
    },
    {
      name: "Moeda",
      selector: (row) => {
        const currencyKeys = Object.keys(row.currencies);
        if (currencyKeys.length > 0) {
          const firstCurrencyKey = currencyKeys[0];
          return row.currencies[firstCurrencyKey].name;
        }
        return "";
      },
      sortable: true,
      wrap: true,
    },
    {
      name: "Capital",
      selector: (row) => (Array.isArray(row?.capital) ? row.capital[0] : ""),
      sortable: true,
      wrap: true,
    },
    {
      name: "Continente",
      selector: (row) => row?.region,
      sortable: true,
      wrap: true,
    },
  ];

  const searchAgain = (country, type) => {
    setSearchTerm(country);
    handleSearch(country, type);
  };

  const handleSearch = (searchTerm, optionType) => {
    const object = {
      type: optionType,
      country: searchTerm,
      time: new Date().toLocaleString("pt-br"),
    };

    // Verificar se o país já está presente nas buscas armazenadas
    const storedSearchTerms =
      JSON.parse(localStorage.getItem("searchTerms")) || [];
    const isAlreadySearched = storedSearchTerms.some(
      (item) => item.country === searchTerm
    );

    if (searchTerm.trim() === "") {
      setFilteredData(restCountries);
    } else {
      const filtered = restCountries?.filter((item) =>
        item.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (filtered.length !== 0) {
        if (!isAlreadySearched && optionType.length !== 0) {
          localStorage.setItem(
            "searchTerms",
            JSON.stringify([...storedSearchTerms, object])
          ); // Adicionar a nova busca ao array existente
        }
        setSearchTerm((searchTerms) => [...searchTerms, object]); // Atualizar o estado de searchTerm com a nova busca
        if (optionType.includes("tabela")) {
          setDisplayMap("hidden");
          setDisplayTable("block");
        } else if (optionType.includes("mapa")) {
          setDisplayMap("visible");
          setDisplayTable("none");
        } else if (
          optionType.includes("mapa") &&
          optionType.includes("tabela")
        ) {
          setDisplayMap("visible");
          setDisplayTable("block");
        } else {
          toast({
            title: "Selecione um tipo de exibição",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
        setFilteredData(filtered);

        // Criar objeto para o setPopup
        const popupObject = {
          name: filtered[0]?.name?.common,
          population: filtered[0]?.population,
          language: Object.values(filtered[0]?.languages)[0],
          currency: Object.values(filtered[0]?.currencies)[0]?.name,
          capital: Array.isArray(filtered[0]?.capital)
            ? filtered[0]?.capital[0]
            : "",
          region: filtered[0]?.region,
        };
        setPopup(popupObject);
      } else {
        toast({
          title: "País não encontrado",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <NavBar>
      <Main />
      <Container maxW="container.lg" py={12}>
        <Historic searchTerms={searchTerm} searchAgain={searchAgain} />
        <SearchBar onSearch={handleSearch} />
        <Box display={displayTable}>
          <CustomTable data={filteredData} columns={columns} />
        </Box>
        <Box visibility={displayMap}>
          <Map
            latlng={filteredData ? filteredData[0]?.latlng : null}
            popup={popup}
          />
        </Box>
      </Container>
    </NavBar>
  );
}

export default App;
