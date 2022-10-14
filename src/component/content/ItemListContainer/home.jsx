import React, {useState, useEffect} from 'react';

import { consultarBDD } from '../../../utils/funciones';
import { Link } from 'react-router-dom';

const Home = () => {


    const [productos, setproductos] = useState([]);
    useEffect(() => {
           

            consultarBDD().then( productos=> 
                
                {

                    const cardProductos = productos.map (producto =>
                        <div className="card cardProducto"  key={ producto.id} >
                            <img src={"./img/" + producto.img} className="card-img-top" alt={producto.nombre} />
                            <div className="card-body">
                                 <h5 className="card-title">{producto.nombre}</h5>
                                 <p className="card-text">Marca: {producto.marca}</p>
                                 <p className="card-text">Colores: {producto.colores} </p>
                                 <p className="card-text">Talles: {producto.talles} </p>
                                 <p className="card-text">Precio: ${producto.Precio} </p>
                                 <p className="card-text">Stock: {producto.stock} </p>
                                 <button   className='btn btn-dark' ><Link className='nav-link' to={"/producto/"+ producto.id}>Ver Producto</Link></button>
                             </div>
                        </div>  ) 
                
                setproductos(cardProductos)
                    })
    
        }, []);

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default Home;
