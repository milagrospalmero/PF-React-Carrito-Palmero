import React from 'react';

const Chekout = () => {
    const datosFormulario = React.useRef()
    const chekOut = (e) =>{
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        console.log(Object.fromEntries (datForm))


    }
    return (
        <>
            <div className="container">
            <form onSubmit={chekOut} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre </label>
                    <input type="nombre" className="form-control" name="nombre"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido </label>
                    <input type="nombre" className="form-control" name="apellido"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" name="email"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir Email </label>
                    <input type="repetiremail" className="form-control" name="repetiremail"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Direccion</label>
                    <input type="direccion" className="form-control" name="direccion"  />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="telefono" className="form-label">Telefono</label>
                    <input type="telefono" className="form-control" name="telefono"  />
                    
                </div>
                
                
                <div>
                <button type="submit" className="btn btn-primary">Enviar Pedido</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Chekout;
