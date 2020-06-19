import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = () => {
  return (    
    <nav>
      <h1>CORONAVÍRUS</h1>
      <div className="links">
        <Link to="/">Painel Geral</Link>
        <Link to="/sobre">Sobre</Link>
      </div>
    </nav>
  )
}

export default Header;