import React, {useState, useEffect} from 'react';


 const Cotizacionmoneda = () => {
    const [dolar, setDolar] = useState([]);

    useEffect(() => {
       
        const mostrarCotizacion = ()=> {
            fetch("https://criptoya.com/api/dolar")
            .then(response => response.json())
            .then (({oficial, solidario, blue, ccb,ccl, mep}) => {
                setDolar(Object.entries({oficial, solidario,blue,ccb,ccl,mep}).map((moneda, indice)=><p key={indice}>Dolar: {moneda[0]} ${moneda[1]}</p> ))
    
            })
        }
        
        mostrarCotizacion()
        setInterval(()=>{
            mostrarCotizacion()
        }, 60000)

    }, []);




    return (
        <>
           {dolar}
        </>
    );
 }
 
 export default Cotizacionmoneda;
 