
//import { cargarBaseDeDatos } from "./firebase"
export  const consultarBDD = async (url)=> {
    const response = await fetch(url ||"./json/productos.json")
    const productos= await response.json()
    
    return productos
}

 //cargarBaseDeDatos()

