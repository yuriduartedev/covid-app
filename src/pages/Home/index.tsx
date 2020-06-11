import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="page-home">
      <h1>Home</h1>

      <Link to="/details">
        Ir para detalhes
      </Link>
    </div>
  );
};

export default Home;