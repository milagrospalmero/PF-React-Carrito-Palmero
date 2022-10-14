import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Detalleproducto from './detalleproducto';


const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        fetch("../json/productos.json")
        .then (response => response.json())
        .then (productos => {
            const productoX = productos.find (productoArray => productoArray.id == id)
            setProducto (productoX)
        })

        
    }, []);


    return (
        
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <Detalleproducto producto = {producto}/>
            </div>

        
    );
}

export default Producto;
