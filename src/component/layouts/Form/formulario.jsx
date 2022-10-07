import React from 'react';


const Formulario = ({busqueda}) => {
    return (
        <>
            <form className="d-flex">
            
          <input className="form-control me-sm-2" type="text" placeholder={busqueda}  _mstplaceholder={76154} />
          <button className="btn btn-secondary my-2 my-sm-0 m-3" type="submit">Search</button>
        </form> 
        </>
    );
}

export default Formulario;
