import React from 'react';

const Detalleproducto = ({producto}) => {
    return (
        <>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= {`../img/${producto.img}`} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{producto.nombre}</h5>
                        <p className="card-text">Marca: {producto.marca}</p>
                        <p className="card-text">Colores: {producto.colores}</p>
                        <p className="card-text">Talles: {producto.talles}</p>
                        <p className="card-text">Stock: {producto.stock}</p>
                        <h5 className="card-text"> $ {producto.Precio}</h5>
                        <button className='btn btn-dark'>Comprar</button>
                        
                    </div>
                 </div>
            </div>
        </>
    );
}

export default Detalleproducto;
