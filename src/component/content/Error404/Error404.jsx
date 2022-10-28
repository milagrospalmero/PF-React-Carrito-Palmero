import React from 'react';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <div className="card text-center position-absolute top-50 start-50 translate-middle " style={{width: '74rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">ERROR 404</h5>
                        <Link className="btn btn-primary" to={"/"}>Ir al Home</Link>
           
            
        </div>
        </div>

       


        </>
    );
}

export default Error404;
