// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, addDoc,getFirestore,getDocs, getDoc, doc} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "carrito-react-milagrospalmero.firebaseapp.com",
  projectId: "carrito-react-milagrospalmero",
  storageBucket: "carrito-react-milagrospalmero.appspot.com",
  messagingSenderId: "249599130545",
  appId: "1:249599130545:web:71d487f9c222756528db90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

//const cargarBaseDeDatos = async () => {
  //const promise = await fetch('./json/productos.json')
  //const productos = await promise.json()
  //productos.forEach( async(producto) => {
    // await addDoc(collection(db,"productos"), {
      //    nombre: producto.nombre,
          
        //  categoria: producto.idCategoria,
        // talle: producto,talles,
          //stock: producto.stock,
          //precio: producto.Precio,
          //img: producto.img
     //})
  //})
//}

const getProducto = async (id) => {
  const producto = await getDoc(doc(db, "productos", id))
  const prod = [producto.id, producto.data()]
  console.log(prod)
  return prod
 

}

const getProductos = async () => {
  const productos = await getDocs(collection(db, "productos"))
  const items = productos.docs.map(producto=>[producto.id, producto.data()])
  
  
  return items
}


export { getProductos, getProducto}