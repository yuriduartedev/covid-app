import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

import Title from '../../components/PageTitle';
import Card from '../../components/Card';

interface Cases {
  totalCases: number;
  recovered: number;
  deaths: number;
  brazilCases: number;
}

const Home = () => {

  const [cases, setCases] = useState<Cases>()

  useEffect(() => {
    api.get('').then((response) => {
      console.log(response);
    })
  }, [])


  return (
    <div id="page-home">
      <Title />

      <div className="cards">
        <Card
          title={`Total de casos:`}
          firstResult={`0`}
          subTitle=""
          secondResult={0}
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
