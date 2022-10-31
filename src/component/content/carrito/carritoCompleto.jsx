import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from './carritoContext';
import { Link } from "react-router-dom";
import Carrito from './carrito';
import "../../../style/carrito.css"


const CarritoCompleto = () => {
    const {carrito, agregarProducto, quitarProducto, clearCarrito, producto}  = useContext(CarritoContext)
    return (
        <>
               <Carrito/>
               <div className="total">
                <h5>Cantidad Total: $ </h5>
                <button className='btn btn-dark' onClick={() => clearCarrito (producto)}>Vaciar Carrito</button>
                <Link className="btn btn-primary" onClick={() => clearCarrito (producto)} to={"/chekout"}>Enviar Pedido</Link>
                
              </div>
            
        </>
    );
}

export default CarritoCompleto;
