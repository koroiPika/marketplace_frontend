import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import MyContext from './MyContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Login from './views/Login';
import Registro from './views/RegistroUsuario';
import Perfil from './views/MiPerfil';
import Formulario from './views/FormProducts';
import Galeria from './views/Galeria';
import InfoProducto from './views/InfoProducto';
import EnVenta from './views/EnVenta';
import NotFound from './views/NotFound';
import BarraNavegacion from './components/Navbar';

import Fotter from './components/Fotter';


function App() {
  const [changeState, setChangeState] = useState(0);
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [searchConcept, setSearchConcept] = useState("");
  const [idUser, setIdUser] = useState([]);
  const [priceFilter, setPriceFilter] = useState([]);
  const [handlerSearching, setHandlerSearching] = useState([]);
  const [parrafo, setParrafo] = useState("");


  const globalState = {
    products, setProducts,
    users, setUsers,
    priceFilter, setPriceFilter,
    minPrice, setMinPrice,
    maxPrice, setMaxPrice,
    searchConcept, setSearchConcept,
    handlerSearching, setHandlerSearching,
    idUser, setIdUser,
    parrafo, setParrafo,
    changeState, setChangeState
  };


  return (
    <div className="App">
      <MyContext.Provider value={globalState}>
        < BrowserRouter >
          < Routes>
            < Route path="/login" element={< Login />} />
            < Route path="/registro" element={< Registro />} />

          </ Routes >
          < BarraNavegacion />

          < Routes>
            < Route path="/" element={< Home />} />
            < Route path="/login" element={< Login />} />
            < Route path="/perfil/:idusuario" element={< Perfil />} />
            < Route path="/formulario" element={< Formulario />} />
            < Route path="/galeria" element={< Galeria />} />
            < Route path="/infoproducto/:id" element={< InfoProducto />} />
            < Route path="/enventa/:idusuario" element={< EnVenta />} />
            < Route path="*" element={< NotFound />} />
          </ Routes >
          <Fotter />
        </ BrowserRouter >
      </MyContext.Provider>
    </div>
  );
}


export default App;
