
import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { consultarBDD } from '../../../utils/funciones';

//itemListContainer
const Categoria = () => {
    const [productos, setProductos] = useState([]);
    const {id} = useParams()
    useEffect(() => {
       consultarBDD("../json/productos.json").then(productos => {
        const productosCategoria = productos.filter(producto => producto.idCategoria === parseInt (id))
        console.log(productosCategoria)
        const cardProductos = productosCategoria.map (producto =>
            
            <div className="card cardProducto"  key={ producto.id} >
                 <div className="container h-100">
                <img src={producto.img} className="card-img-top img-thumbnail" alt={producto.nombre} />
                
                </div>
                <div className="card-body">
                     <h5 className="card-title">{producto.nombre}</h5>
                     
                     <p className="card-text">Talles: {producto.talles} </p>
                     <p className="card-text">Precio: ${producto.Precio} </p>
                     <p className="card-text">Stock: {producto.stock} </p>
                     <button   className='btn btn-dark' ><Link className='nav-link' to={"/producto/"+ producto.id}>Ver Producto</Link></button>
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
