import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Item = () => {
    const [producto, setproducto] = useState(initialState);
    const {id}= useParams() 
   useEffect(() => {
     fetch ("../json/producto.json")
     .then(response => response.json())
     .then(data =>{
            const producto1 = productos.find(productoArray => productoArray.id == id)
            setproducto(producto1)

     })
   
   }, []);
   
    return (
        <>
            <div className="card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default Item;
