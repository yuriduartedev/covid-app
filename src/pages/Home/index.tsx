import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

import Title from '../../components/PageTitle';
import Card from '../../components/Card';

interface Brazil {
  country: string;
  cases: number | string;
  confirmed: number | string;
  deaths: number | string;
  recovered: number | string;
  updated_at: string;
}

const Home = () => {
  const [countriesCases, setCountriesCases] = useState<Brazil>({
    country: '',
    cases: '⌀',
    confirmed: '⌀',
    deaths: '⌀',
    recovered: '⌀',
    updated_at: ''
  });

  useEffect(() => {
    api.get('countries').then((response) => {
      const cases = response.data.data;

      setCountriesCases(cases[21]);
      console.log(cases[21]);
    });
  }, [])

  return (
    <div id="page-home">
      <Title />

      <div className="cards">
        <Card
          title={`Casos confirmados:`}
          firstResult={countriesCases.confirmed}
          subTitle=""
          secondResult={123}
        />

        {/* <Card
          title="Test"
          firstResult={123}
          subTitle="teste2"
          secondResult={123}
          subClass="bg-white"
        /> */}
      </div>
    </div>
  );
};

export default Home;
