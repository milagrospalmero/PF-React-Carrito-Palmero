import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './component/App';
import { CarritoProvider } from './component/content/carrito/carritoContext';
import "./utils/funciones.js"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <CarritoProvider>
<App />
    </CarritoProvider>
    

 
  
);
