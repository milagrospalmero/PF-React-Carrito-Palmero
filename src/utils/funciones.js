export  const consultarBDD = async ()=> {
    const response = await fetch("./json/productos.json")
    const productos= await response.json()
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
                     <button   className='btn btn-dark'> Ver Producto</button>
                 </div>
            </div>

                   

    ) 
    return cardProductos
}