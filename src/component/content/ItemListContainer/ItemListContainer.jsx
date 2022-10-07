import React, {useState, useEffect} from 'react';

import { consultarBDD } from '../../../utils/funciones';

const ItemListContainer = () => {


    const [productos, setproductos] = useState([]);
    useEffect(() => {
           

            consultarBDD().then( producto=> setproductos(producto))
    
        }, []);

    return (
        <div className='row'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
