import React, {useContext, useEffect, useState, Link} from 'react';
import { CarritoContext } from './carritoContext';



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
                                     <button className='btn btn-dark' onClick={() => quitarProducto(producto)}>Eliminar</button>
                                 </div>
                                 <button className='btn btn-dark' onClick={() => clearCarrito (producto)}>Vaciar Carrito</button>
                                 
                               
            </div>  
            )

                            
            
              

            setCarritoLocal(prodMostrar)
        
    }, [carrito]);

    const app = (carrito.length != 0) ? <div className='row'> {carritoLocal} </div> : <> <div className="row">
    <div className="col-sm-11">
      <div className="card w-100%">
        <div className="card-body">
          <h5 className="card-title">Carrito Vacio</h5>
          
          <a href="#" className="btn btn-primary">Ir al Home</a>
        </div>
      </div>
    </div>
  </div></>

    return app

;
    
}

export default Carrito;
