import React from 'react';

import './styles.css';

import Title from '../../components/PageTitle';
import Card from '../../components/Card';

const Home = () => {
  return (
    <div id="page-home">
      <Title />

      <div className="cards">
        <Card
          title="Test"
          firstResult={123}
          subTitle="teste2"
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
