
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';

import { getProductos } from '../../../utils/firebase';

//itemListContainer
const Categoria = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       getProductos().then(productos => {
        const productosCategoria = productos.filter(producto => producto[1].categoria == id)
        console.log(productosCategoria)
        const cardProductos = productosCategoria.map (producto =>
            
            <div className="card cardProducto"  key={ producto[0]} >
                 <div className="container h-100">
                <img src={producto[1].img} className="card-img-top img-thumbnail" alt={producto[1].nombre} />
                
                </div>
                <div className="card-body">
                     <h5 className="card-title">{producto[1].nombre}</h5>
                     
                     <p className="card-text">Talles: {producto[1].talle} </p>
                     <p className="card-text">Precio: ${producto[1].precio} </p>
                     <p className="card-text">Stock: {producto[1].stock} </p>
                     <button   className='btn btn-dark' ><Link className='nav-link' to={`/producto/${producto[0]}`}>Ver Producto</Link></button>
                 </div>
            </div>  ) 
    
    setProductos(cardProductos)

       } )
    }, [id]);

    return (
        <>
        <div className='row'>
           {productos} 
           </div>
        </>
    );
}

export default Categoria;
