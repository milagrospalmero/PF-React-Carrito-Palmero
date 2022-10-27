import React, {useState, useContext} from 'react';
import { CarritoContext } from '../carrito/carritoContext';

// itemDetailContainer

const ItemDetail = ({producto, stock, }) => {
    const [cantidad, setCantidad] = useState(1);
    const {carrito, agregarProducto, quitarProducto}= useContext(CarritoContext)
    
    const cantProducto =(operacion) =>{
        if (operacion == "+"){
            if (cantidad < producto[1].stock){
                setCantidad(cantidad + 1)
            } 
            }
            else{
                if (cantidad > 1){
                    setCantidad (cantidad - 1)
                }

        }
    }
   
    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {`${producto[1].img}`} className="img-fluid rounded-start  " alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto[1].nombre}</h5>
                        
                        <p className="card-text">Talles: {producto[1].talle}</p>
                        <p className="card-text">Stock: {producto[1].stock}</p>
                        <h5 className="card-text">Precio:  $ {producto[1].precio}</h5>

                        <div className='container'>
                        
                            <button className='btn btn-ligt' onClick={()=> cantProducto("+")}>+</button>
                            <p className='card-text'>{cantidad}</p>
                            <button className='btn btn-ligt'onClick={()=> cantProducto("-")}>-</button>
                        
                        </div>
                    
                        <button className='btn btn-dark' onClick={()=> agregarProducto(producto, cantidad) }>Agregar al Carrito </button>
                                       
                    </div>
                 </div>
            </div>


        </>
    );
}

export default ItemDetail;
