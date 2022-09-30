import React from 'react';
import Navbar from './component/Navbar/Navbar';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import './App.css';

const App = () => {
    return (
      <>
      <Navbar/>
      <ItemListContainer greeting="Conjunto " />
      </>
    );
    
}

export default App;
