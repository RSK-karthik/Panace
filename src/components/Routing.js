import React from 'react';
import App from '../App';
import Login from './Login'

import Register from './Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Reports from '../pages/Reports';
import Products from '../pages/Products';
function Routing() {
  return (
    <>
    <BrowserRouter>
            <Routes>
                <Route path='/' Component={App}/>
                <Route path='/Login' Component={Login}/>
                <Route path='/Register' Component={Register}/>
                <Route path='/Login/Home' Component={Home}/>
                <Route path='/Login/Reports' Component={Reports}/>
                <Route path='/Login/Products' Component={Products}/>
            </Routes>
        </BrowserRouter>

    </>
  );
}

export default Routing;
