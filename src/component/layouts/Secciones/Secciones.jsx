import {memo} from "react"
import { Link } from "react-router-dom";

const Paginas = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link active" to={"/"}>Home</Link>
                       
            </li>
            
            <li className="nav-item">
                 <Link className="nav-link active" to={"/contacto"}>Contacto</Link>
            </li>
          
          
        </>
    );
}

export default memo (Paginas);
