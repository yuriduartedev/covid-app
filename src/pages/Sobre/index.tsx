import React from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
  return (
    <div className="page-details">

      <h1>Sobre</h1>

      <Link to="/">
        Voltar para home
      </Link>
    </div>
  )
}

export default Sobre;