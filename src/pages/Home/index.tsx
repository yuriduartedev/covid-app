import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';
import './styles.css';

import PageTitle from '../../components/PageTitle';
import Card from '../../components/Card';
import Footer from '../../components/Footer';

interface Country {
  country: string;
  cases: number | string;
  confirmed: number | string;
  deaths: number | string;
  recovered: number | string;
  updated_at: Date | string;
}

const Home = () => {
  const [brazilCases, setBrazilCases] = useState<Country>({
    country: '',
    cases: '⌀',
    confirmed: '⌀',
    deaths: '⌀',
    recovered: '⌀',
    updated_at: ''
  });
  const [usaCases, setUsaCases] = useState<Country>({
    country: '',
    cases: '⌀',
    confirmed: '⌀',
    deaths: '⌀',
    recovered: '⌀',
    updated_at: ''
  });
  const [italyCases, setItalyCases] = useState<Country>({
    country: '',
    cases: '⌀',
    confirmed: '⌀',
    deaths: '⌀',
    recovered: '⌀',
    updated_at: ''
  });
  const [chinaCases, setChinaCases] = useState<Country>({
    country: '',
    cases: '⌀',
    confirmed: '⌀',
    deaths: '⌀',
    recovered: '⌀',
    updated_at: ''
  });

  useEffect(() => {
    api.get('brazil').then((response) => {
      const brazilCases = response.data.data;

      setBrazilCases(brazilCases);
      console.log(brazilCases);
    });
  }, [])

  useEffect(() => {
    api.get('US').then((response) => {
      const usaCases = response.data.data;

      setUsaCases(usaCases);
      console.log(usaCases);
    });
  }, []);
  useEffect(() => {
    api.get('ITALY').then((response) => {
      const italyCases = response.data.data;

      setItalyCases(italyCases);
      console.log(italyCases);
    });
  }, []);
  useEffect(() => {
    api.get('CHINA').then((response) => {
      const chinaCases = response.data.data;

      setChinaCases(chinaCases);
      console.log(chinaCases);
    });
  }, []);

  return (
    <div id="page-home">
      <PageTitle
        title='Painel'
        subTitle='Coronavírus'
        updated_at={brazilCases.updated_at
          ? formatDate(brazilCases.updated_at.toString())
          : ''
        }
      />

      <div className="cards">
        <Card
          title={`🇧🇷 Status no ${brazilCases.country ? 'Brasil' : '' }`}
          label={`✅ Casos confirmados:`}
          firstResult={formatValue(Number(brazilCases.confirmed))}
          subTitle={'🚨 Casos ativos: '}
          secondResult={formatValue(Number(brazilCases.cases))}
          thirdTitle={'💀 Mortes confirmadas: '}
          thirdResult={formatValue(Number(brazilCases.deaths))}
          fourthTitle={'♻️ Casos recuperados '}
          fourthResult={formatValue(Number(brazilCases.recovered))}
        />

        <Card
          title={`🇺🇸 Status em ${usaCases.country ? 'USA' : '' }`}
          label={`✅ Casos confirmados:`}
          firstResult={formatValue(Number(usaCases.confirmed))}
          subTitle={'🚨 Casos ativos: '}
          secondResult={formatValue(Number(usaCases.cases))}
          thirdTitle={'💀 Mortes confirmadas: '}
          thirdResult={formatValue(Number(usaCases.deaths))}
          fourthTitle={'♻️ Casos recuperados '}
          fourthResult={formatValue(Number(usaCases.recovered))}
          subClass="border-blue"
        />

        <Card
          title={`🇮🇹 Status em ${italyCases.country ? 'italy' : '' }`}
          label={`✅ Casos confirmados:`}
          firstResult={formatValue(Number(italyCases.confirmed))}
          subTitle={'🚨 Casos ativos: '}
          secondResult={formatValue(Number(italyCases.cases))}
          thirdTitle={'💀 Mortes confirmadas: '}
          thirdResult={formatValue(Number(italyCases.deaths))}
          fourthTitle={'♻️ Casos recuperados '}
          fourthResult={formatValue(Number(italyCases.recovered))}
          subClass="border-blue"
        />

        <Card
          title={`🇨🇳 Status em ${chinaCases.country ? 'China' : '' }`}
          label={`✅ Casos confirmados:`}
          firstResult={formatValue(Number(chinaCases.confirmed))}
          subTitle={'🚨 Casos ativos: '}
          secondResult={formatValue(Number(chinaCases.cases))}
          thirdTitle={'💀 Mortes confirmadas: '}
          thirdResult={formatValue(Number(chinaCases.deaths))}
          fourthTitle={'♻️ Casos recuperados '}
          fourthResult={formatValue(Number(chinaCases.recovered))}
          subClass="border-blue"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
