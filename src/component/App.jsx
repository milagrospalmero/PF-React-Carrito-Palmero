import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './content/Navbar/Navbar';
import "../style/App.css";
import Footer from './content/footer/footer';
import About from "./content/About/about";
import Contacto from "./content/Contacto/contacto";
import Carrito from './content/carrito/carrito';
import ItemListContainer from './content/ItemListContainer/ItemListContainer';
import ItemDetail from "./content/ItemListContainer/ItemDetail";
import Producto from "./content/ItemListContainer/producto";

const App = () => {
  
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<ItemListContainer/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
              
              <Route path="/item/:id" element={<ItemDetail/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contacto" element={<Contacto/>}/>
              <Route path="/carrito" element={<Carrito/>}/>
          </Routes>
          <Footer/>

          
        </BrowserRouter>



      
      
      </>
    );
    
}

export default App;
