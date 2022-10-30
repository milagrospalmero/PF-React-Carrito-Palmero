import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from './carritoContext';
import { Link } from "react-router-dom";
import Carrito from './carrito';


const CarritoCompleto = () => {
    const {carrito, agregarProducto, quitarProducto, clearCarrito, producto}  = useContext(CarritoContext)
    return (
        <>
               <Carrito/>
               <div className="container">
               
                                 <button className='btn btn-dark' onClick={() => clearCarrito (producto)}>Vaciar Carrito</button>
                                 <Link className="btn btn-primary" to={"/chekout"}>Enviar Pedido</Link>
               </div>
            
        </>
    );
}

export default CarritoCompleto;
