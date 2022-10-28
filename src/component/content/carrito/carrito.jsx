import React, {useContext, useEffect, useState} from 'react';
import { CarritoContext } from './carritoContext';
import { Link } from "react-router-dom";



const Carrito = () => {
    const {carrito, agregarProducto, quitarProducto, clearCarrito}  = useContext(CarritoContext)
    const [carritoLocal, setCarritoLocal] = useState([]);
    
    
    useEffect(() => {
        
        const prodMostrar  = carrito.map(producto=>
            <div className="card cardProducto"  key={ producto.id} >
                
                                <div className="container h-100">
                                    <img src={producto.img} className="card-img-top" alt={producto.nombre} />
                                </div>
                                <div className="card-body">
                                     <h5 className="card-title">{producto.nombre}</h5>
                                     
                                     <p className='card-text'>Cantidad: {producto.cantidad}</p>
                                     <p className="card-text">Precio: $ {producto.precio} </p>
                                     <p className="card-text">Precio Total: $  {producto.precio * producto.cantidad}</p>
                                     <div class="d-grid gap-5 col-12 mx-auto"> 
                                     <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                                     </div>
                                 </div>
                                 
                                 <button className='btn btn-dark' onClick={() => clearCarrito (producto)}>Vaciar Carrito</button>
                            
            </div>  
            
            )

                            
            
            

            setCarritoLocal(prodMostrar)
            
        
    }, [carrito]);
    

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
