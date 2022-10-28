import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetailContainer/ItemDetail';
import { getProducto } from '../../../utils/firebase';



const Producto = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        
        getProducto(id).then(prod => {
            setProducto(prod)
        })
        
    }, []);

    if (producto.length != 0) {
        return (
            <div className="card mb-5 position-absolute top-50 start-50 translate-middle" style={{maxWidth: '750px'}}>
            <ItemDetail producto = {producto}/>
            
          </div>
        )
    }}
    

export default Producto;
