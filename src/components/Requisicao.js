import React, { useState, useEffect } from 'react';
import { fetchData } from '../api/restcountries';

const Requisicao = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        // Trate erros aqui
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <div>
      {data ? (
        <div>
          {JSON.stringify(data)}
        </div>
      ) : (
        <div>Carregando...</div>
      )}
    </div>
  );
};

export default Requisicao;
