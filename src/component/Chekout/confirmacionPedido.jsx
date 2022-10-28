import React from 'react';
import { Link } from "react-router-dom";

const ConfirmacionPedido = () => {
    return (
        <>
            <div className="card text-center position-absolute top-50 start-50 translate-middle " style={{width: '74rem'}}>
        <div className="card-body">
            <h5 className="card-title">Gracias por su Compra</h5>
           <p>A la brevedad nos pondremos en contacto para su Envio.</p>
            
            <Link className="btn btn-primary" to={"/"}>Ir al Home</Link>
        </div>
        </div>
        </>
    );
}

export default ConfirmacionPedido;
