import { fetchData } from "../api/restcountries";

const getRestCountries = async () => {
  try {
    const result = await fetchData();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { getRestCountries };
