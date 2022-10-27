import React, {memo }from 'react';
import "../../../style/NavFoter.css";


const Footer = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid"></div>
                 
            
        </nav> 
           
        </>
    );
}

export default memo (Footer);
//sacarle la cotizacion del dolar asi queda estatico , sino sacarle el memo
