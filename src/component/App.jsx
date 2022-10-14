import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from './content/Navbar/Navbar';
import "../style/App.css";
import Footer from './content/footer/footer';
import About from "./content/About/about";
import Contacto from "./content/Contacto/contacto";
import Carrito from './content/carrito/carrito';
import Category from "./content/ItemListContainer/category";
import ItemDetail from "./content/ItemListContainer/ItemDetail";
import Producto from "./content/ItemListContainer/producto";
import Home from "./content/ItemListContainer/home";


const App = () => {
  
    return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/category/:id" element={<Category/>}/>
              <Route path="/" element={<Home/>}/>
              <Route path="/item/:id" element={<ItemDetail/>}/>
              <Route path="/producto/:id" element={<Producto/>}/>
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
