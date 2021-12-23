import React from 'react';
import './components/styles/styles.css'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import NavBar from "./components/navBar/NavBar";

import {ItemListContainer} from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";
import { Categories } from './components/mock/Categorias';

function App () {
  
  return  (
      <BrowserRouter>
      
        <NavBar/>
        <Categories/>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />
          <Route className= "tiendaa"
            path="/category/:catId"
            element={<ItemListContainer greeting={'FILTRADO'} />}
          />

          <Route path="/product/:itemId" element={<ItemDetailContainer />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

      </BrowserRouter>
  );

};

export default App;
