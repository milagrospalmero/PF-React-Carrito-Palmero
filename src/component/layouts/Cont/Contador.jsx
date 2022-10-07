import React,{useState}  from 'react';

const Contador = () => {

    const [contador, setContador] = useState(1);

    function modificarContador (operacion) {
         if (operacion == "+" ){
                 setContador (contador + 1)
         } else
           { if (contador > 0 )
           { setContador ( contador - 1)}
        }

    }

    return (
        <>
        <div className='cart-form'>
        <button className='button-cantidad' onClick={ () => modificarContador ("+")}>+</button>
          <input className ="card-imput" type="number" min="1" value={contador} />
        <button className='button-cantidad' onClick={ () => modificarContador ("-")}>-</button>
        <button className='card-button' type='submit'>Agregar Carrito</button>
          </div>
        </>
    );
}

export default Contador;
