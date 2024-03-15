import { useEffect, useState } from "react";
import { getRestCountries } from "./services/restcountries-services";
import "./index.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CustomTable from "./components/CustomTable";
import { Box, Container, useToast } from "@chakra-ui/react";
import SearchBar from "./components/SearchBar";
import Map from "./components/Map";

function App() {
  const [restCountries, setRestCountries] = useState();
  const [filteredData, setFilteredData] = useState();
  const [optionType, setOptionType] = useState();
  const [displayTable, setDisplayTable] = useState("none");
  const [displayMap, setDisplayMap] = useState("hidden");

  const toast = useToast();

  async function request() {
    await getRestCountries()
      .then((response) => {
        console.log("getRestCountries response", response);
        setRestCountries(response);
        setFilteredData(response);
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
      maxWidth: "200px",
      center: true,
    },
    {
      name: "Nome",
      selector: (row) => row?.name?.common,
      sortable: true,
    },
    {
      name: "População",
      selector: (row) => row?.population,
      sortable: true,
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
    },
    {
      name: "Capital",
      selector: (row) => (Array.isArray(row?.capital) ? row.capital[0] : ""),
      sortable: true,
    },
    {
      name: "Região",
      selector: (row) => row?.region,
      sortable: true,
    },
  ];

  const data = {
    name: {
      common: "Timor-Leste",
      official: "Democratic Republic of Timor-Leste",
      nativeName: {
        por: {
          official: "República Democrática de Timor-Leste",
          common: "Timor-Leste",
        },
        tet: {
          official: "Repúblika Demokrátika Timór-Leste",
          common: "Timór-Leste",
        },
      },
    },
    tld: [".tl"],
    cca2: "TL",
    ccn3: "626",
    cca3: "TLS",
    cioc: "TLS",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
      USD: {
        name: "United States dollar",
        symbol: "$",
      },
    },
    idd: {
      root: "+6",
      suffixes: ["70"],
    },
    capital: ["Dili"],
    altSpellings: [
      "TL",
      "East Timor",
      "Democratic Republic of Timor-Leste",
      "República Democrática de Timor-Leste",
      "Repúblika Demokrátika Timór-Leste",
      "Timór Lorosa'e",
      "Timor Lorosae",
    ],
    region: "Asia",
    subregion: "South-Eastern Asia",
    languages: {
      por: "Portuguese",
      tet: "Tetum",
    },
    translations: {
      ara: {
        official: "جمهورية تيمور الشرقية الديمقراطية",
        common: "تيمور الشرقية",
      },
      bre: {
        official: "Republik demakratel Timor ar Reter",
        common: "Timor ar Reter",
      },
      ces: {
        official: "Demokratická republika Východní Timor",
        common: "Východní Timor",
      },
      cym: {
        official: "Democratic Republic of Timor-Leste",
        common: "Timor-Leste",
      },
      deu: {
        official: "Demokratische Republik Timor-Leste",
        common: "Osttimor",
      },
      est: {
        official: "Timor-Leste Demokraatlik Vabariik",
        common: "Ida-Timor",
      },
      fin: {
        official: "Itä-Timorin demokraattinen tasavalta",
        common: "Itä-Timor",
      },
      fra: {
        official: "République démocratique du Timor oriental",
        common: "Timor oriental",
      },
      hrv: {
        official: "Demokratska Republika Timor-Leste",
        common: "Istočni Timor",
      },
      hun: {
        official: "Kelet-timori Demokratikus Köztársaság",
        common: "Kelet-Timor",
      },
      ita: {
        official: "Repubblica Democratica di Timor Est",
        common: "Timor Est",
      },
      jpn: {
        official: "東ティモール民主共和国",
        common: "東ティモール",
      },
      kor: {
        official: "동티모르 민주 공화국",
        common: "동티모르",
      },
      nld: {
        official: "Democratische Republiek Oost-Timor",
        common: "Oost-Timor",
      },
      per: {
        official: "جمهوری دموکراتیک تیمور شرقی",
        common: "تیمور شرقی",
      },
      pol: {
        official: "Demokratyczna Republika Timoru Wschodniego",
        common: "Timor Wschodni",
      },
      por: {
        official: "República Democrática de Timor-Leste",
        common: "Timor-Leste",
      },
      rus: {
        official: "Демократическая Республика Тимор -Лешти",
        common: "Восточный Тимор",
      },
      slk: {
        official: "Východotimorská demokratická republika",
        common: "Východný Timor",
      },
      spa: {
        official: "República Democrática de Timor-Leste",
        common: "Timor Oriental",
      },
      srp: {
        official: "Демократска Република Источни Тимор",
        common: "Источни Тимор",
      },
      swe: {
        official: "Demokratiska republiken Östtimor",
        common: "Östtimor",
      },
      tur: {
        official: "Doğu Timor Demokratik Cumhuriyeti",
        common: "Doğu Timor",
      },
      urd: {
        official: "جمہوری جمہوریہ مشرقی تیمور",
        common: "مشرقی تیمور",
      },
      zho: {
        official: "东帝汶民主共和国",
        common: "东帝汶",
      },
    },
    latlng: [-8.83333333, 125.91666666],
    landlocked: false,
    borders: ["IDN"],
    area: 14874,
    demonyms: {
      eng: {
        f: "East Timorese",
        m: "East Timorese",
      },
      fra: {
        f: "Est-timoraise",
        m: "Est-timorais",
      },
    },
    flag: "🇹🇱",
    maps: {
      googleMaps: "https://goo.gl/maps/sFqBC9zjgUXPR1iTA",
      openStreetMaps: "https://www.openstreetmap.org/relation/305142",
    },
    population: 1318442,
    gini: {
      2014: 28.7,
    },
    fifa: "TLS",
    car: {
      signs: ["TL"],
      side: "left",
    },
    timezones: ["UTC+09:00"],
    continents: ["Oceania"],
    flags: {
      png: "https://flagcdn.com/w320/tl.png",
      svg: "https://flagcdn.com/tl.svg",
      alt: "The flag of Timor-Leste has a red field with two isosceles triangles which share a common base on the hoist end. The smaller black triangle, which bears a five-pointed white star at its center and spans one-third the width of the field, is superimposed on the larger yellow triangle that extends to the center of the field.",
    },
    coatOfArms: {},
    startOfWeek: "monday",
    capitalInfo: {
      latlng: [-8.58, 125.6],
    },
  };

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setFilteredData(restCountries);
    } else {
      const filtered = restCountries?.filter((item) =>
        item.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (optionType?.includes("tabela")) {
        setDisplayTable("block");
      } else if (optionType?.includes("mapa")) {
        setDisplayMap("visible");
      } else if (
        optionType?.includes("mapa") &&
        optionType?.includes("tabela")
      ) {
        setDisplayTable("block");
        setDisplayMap("visible");
      } else {
        toast({
          title: "Selecione um tipo de exibição",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      console.log("filtered", filtered);
      setFilteredData(filtered);
    }
  };

  return (
    <NavBar>
      <Main />
      <Container maxW="container.lg" py={12}>
        <SearchBar
          onSearch={handleSearch}
          optionType={(e) => setOptionType(e)}
        />
        <Box display={displayTable}>
          <CustomTable data={filteredData} columns={columns} />
        </Box>
        <Box visibility={displayMap}>
          <Map latlng={filteredData ? filteredData[0]?.latlng : null} />
        </Box>
      </Container>
    </NavBar>
  );
}

export default App;
