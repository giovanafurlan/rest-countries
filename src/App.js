import { useEffect, useState } from "react";
import { getRestCountries } from "./services/restcountries-services";

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

  return <></>;
}

export default App;
