import React from 'react';

const ItemListContainer = ({ greeting }) => {
    
    return (
        <>
        <div className="card" style={{width: '18rem', margin: "0.5rem"}}>
                <img src="../../../img/ropa-mujer.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-text text-center">{greeting}</h4>
                    <a href="#" className="btn btn-primary ">Informacion</a>
               </div>
        </div>


         
    
        </>
    );
}

export default ItemListContainer;
