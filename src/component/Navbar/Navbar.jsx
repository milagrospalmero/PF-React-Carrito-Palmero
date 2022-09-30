import React from 'react';
import Formulario from './formulario';
import Dorpdown from './Dropdown';
import Secciones from './Secciones';
import Cardwidget from '../CardWidget/cardwidget';
const Navbar = () => {
  const listDropdown = ["Hombre", "Mujer", "Niños", " Bebes"]
    return (
        <>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#"><img src="..\..\..\img\oip.jpg" alt="" /></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" _mstaria-label={320099}>
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto">
        <Secciones/>
          <Dorpdown  lista= {listDropdown}/> 
        </ul>
        <Formulario busqueda= "Buscar Producto"/>
      </div>
      <Cardwidget />
    </div>
    
  </nav>
  
  
        </>
    );
}

export default Navbar;
