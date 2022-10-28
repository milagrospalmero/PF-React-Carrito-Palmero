import React, {link} from 'react';

import { Link } from "react-router-dom";

const Contacto = () => {
    const datosFormulario = React.useRef()
    const consultarForm = (e) =>{
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries (datForm))


    }
    return (
       
        <>
        <div className="container">
            <form onSubmit={consultarForm} ref={datosFormulario}>
            <div className="mb-3">
                    <label htmlFor="nombre" className="form-label text-white">Nombre </label>
                    <input type="nombre" className="form-control " name="nombre"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-white">Email </label>
                    <input type="email" className="form-control" name="email"  />
                    
                </div>
                
                <div className="mb-3 ">
                     <textarea name="consulta" rows={10} cols={135} defaultValue={"Escribe tu consulta"} />

                    
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                
                <Link className="btn text-dark bg-white" to={"/confirmaConsulta"}>Enviar Consulta</Link>
                
                
                </div>
            </form>
        </div>

        </>
    );
}

export default Contacto;
