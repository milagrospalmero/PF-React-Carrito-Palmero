import React from 'react';


const Formulario = ({busqueda}) => {
    return (
        <>
            <form className="d-flex">
            <button className="btn btn-secondary me-2 my-sm-0 " type="submit">Carrito</button>
          <input className="form-control me-sm-2" type="text" placeholder={busqueda}  _mstplaceholder={76154} />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form> 
        </>
    );
}

export default Formulario;
