import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './content/Navbar/Navbar';
import "../style/App.css";
import Footer from './content/footer/footer';

import Contacto from "./content/Contacto/contacto";
import Carrito from './content/carrito/carrito';
import Categoria from "./content/ItemListContainer/Categoria";

import Producto from "./content/ItemListContainer/Producto";
import Home from "./content/ItemListContainer/Home";
import Detalleproducto from "./content/ItemDetailContainer/ItemDetail";
import Error404 from "./content/Error404/Error404";


const App = () => {
  
    return (
      <>
      
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/categoria/:id" element={<Categoria/>}/>
                    
                    <Route path="/item/:id" element={<Detalleproducto/>}/>
                    <Route path="/producto/:id" element={<Producto/>}/>
                  
                    <Route path="/contacto" element={<Contacto/>}/>
                    <Route path="/carrito" element={<Carrito/>}/>
                    <Route path= "*" element={<Error404/>}/>
                </Routes>
                <Footer/>

                
              </BrowserRouter>

      
       



      
      
      </>
    );
    
}

export default App;
