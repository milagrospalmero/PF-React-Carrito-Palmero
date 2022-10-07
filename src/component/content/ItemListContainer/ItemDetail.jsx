import React from 'react';
import Contador from '../../layouts/Cont/Contador';

const ItemDetail = ({ greeting }) => {
    
    return (
        <>
        <div className="card" style={{width: '18rem', margin: "0.5rem"}}>
                <img src="../../../img/ropa-mujer.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-text text-center">{greeting}</h4>
                    <p className='card-text'> Detalle</p>
                    <Contador/>
               </div>
        </div>

       
    
        </>
    );
}

export default ItemDetail;
