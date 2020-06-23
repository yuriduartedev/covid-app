import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';
import './styles.css';

import PageTitle from '../../components/PageTitle';
import Card from '../../components/Card';

interface Brazil {
  country: string;
  cases: number | string;
  confirmed: number | string;
  deaths: number | string;
  recovered: number | string;
  updated_at: Date | string;
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
      <PageTitle
        title='Painel'
        subTitle='Coronavírus'
        updated_at={countriesCases.updated_at ? formatDate(countriesCases.updated_at.toString()) : '' }
      />

      <div className="cards">
        <Card
          title={`Casos confirmados:`}
          firstResult={formatValue(Number(countriesCases.confirmed))}
          subTitle={''}
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
