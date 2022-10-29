import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from './carritoContext';
import { Link } from "react-router-dom";
import "../../../style/carrito.css"


const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto, clearCarrito}  = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    
    
    useEffect(() => {
        
        const prodMostrar  = carrito.map(producto=>
            <div className="card cardProducto carrito-lito" key={producto.id}>

            <div className="container h-100 todo">
              <div className='card-text1'><img src={producto.img} className="card-img" alt={producto.nombre} /></div>
              <h5 className="card-title1">{producto.nombre}</h5>
              <p className='card-text1'>Cantidad: {producto.cantidad}</p>
              <p className="card-text1">Precio: $ {producto.precio} </p>
              <p className="card-text1">Precio Total: $  {producto.precio * producto.cantidad}</p>
              <button className='btn btn-dark1' onClick={() => quitarProducto(producto)}>Eliminar Item</button>

                                     
            </div>

              <div className="total">
                <h5>Cantidad Total: $ </h5>
                <button className='btn btn-dark' onClick={() => clearCarrito (producto)}>Vaciar Carrito</button>
                <Link className="btn btn-primary" to={"/chekout"}>Enviar Pedido</Link>
              </div>
            </div>  
            
            
            )

                            
            
            

            setCarritoLocal(prodMostrar)
            
        
                                 
     
    }, 
    
    [carrito]);
    

    const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div>  : <> 
    <div className="card text-center position-absolute top-50 start-50 translate-middle " style={{width: '74rem'}}>
        <div className="card-body">
            <h5 className="card-title">CARRITO VACIO</h5>
           
            
            <Link className="btn btn-primary" to={"/"}>Ir al Home</Link>
        </div>
        </div>

  </>

    return app 

;
    
}

export default Carrito;
