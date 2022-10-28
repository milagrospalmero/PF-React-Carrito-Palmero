import React from 'react';
import { Link } from "react-router-dom";

const ConfirmaConsulta = () => {
    return (
        <>
            <div className="card text-center position-absolute top-50 start-50 translate-middle " style={{width: '74rem'}}>
        <div className="card-body">
            <h5 className="card-title">Gracias por su consulta</h5>
           <p>A la brevedad nos pondremos en contacto.</p>
            
            <Link className="btn btn-primary" to={"/"}>Ir al Home</Link>
        </div>
        </div>
        </>
    );
}

export default ConfirmaConsulta;
