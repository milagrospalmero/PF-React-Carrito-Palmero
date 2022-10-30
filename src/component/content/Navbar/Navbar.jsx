
import { Link } from 'react-router-dom';

import "../../../style/NavFoter.css";

import Dorpdown from '../../layouts/Dropdown/Dropdown';
import Secciones from '../../layouts/Secciones/Secciones';
import Cardwidget from '../CardWidget/cardwidget';



const Navbar = ({contador}) => {
  const listDropdown = ["Hombre", "Mujer", "Niños", " Bebes"]
    return (
        <>
                      <nav className="navbar navbar-expand-lg navbar-dark ">
                          <div className="container-fluid">
                            <img src="..\..\..\img\oip.jpg"  alt="" />
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" _mstaria-label={320099}>
                               <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarColor01">
                              <ul className="navbar-nav me-auto">
                                  <Secciones/>
                                  <Dorpdown  lista= {listDropdown}/> 
                              </ul>
                    
                            </div>
                            <ul className="navbar-nav me-auto">
                              <li className="nav-item"><Link className="nav-link active" to={"/carritocompleto"}>{<Cardwidget/>}</Link>
                              
                              </li>
                              
                            </ul>
                            </div>
    
                      </nav>
  
  
        </>
    );
}

export default Navbar;
