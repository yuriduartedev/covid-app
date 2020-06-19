import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Header from './components/Header';


const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route  component={Home} path="/" exact />
      <Route  component={Sobre} path="/sobre" />
    </BrowserRouter>
  )
}

export default Routes;