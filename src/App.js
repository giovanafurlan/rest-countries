import { useEffect, useState } from "react";
import { getRestCountries } from "./services/restcountries-services";
import "./index.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import CustomTable from "./components/CustomTable";

function App() {
  const [restCountries, setRestCountries] = useState();

  async function request() {
    await getRestCountries()
      .then((response) => {
        console.log("getRestCountries response", response);
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
      name: "Capital",
      selector: (row) => Array.isArray(row?.capital) ? row.capital[0] : "",
      sortable: true,
    },
    {
      name: "Região",
      selector: (row) => row?.region,
      sortable: true,
    },
  ];

  return (
    <NavBar>
      <Main />
      <CustomTable data={restCountries} columns={columns} />
    </NavBar>
  );
}

export default App;
