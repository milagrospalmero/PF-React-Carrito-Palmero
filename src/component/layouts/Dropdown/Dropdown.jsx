import { Link } from "react-router-dom";


const Dorpdown = ({lista}) => {
    return (
        <>
        
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
            <div className="dropdown-menu">
              
              <Link className='dropdown-item' to={"/categoria/1"}>{lista[0]}</Link>
              <Link className='dropdown-item' to={"/categoria/2"}>{lista[1]}</Link>
              <Link className='dropdown-item' to={"/categoria/3"}>{lista[2]}</Link>
              <Link className='dropdown-item' to={"/categoria/4"}>{lista[3]}</Link>
              
              
              </div>
          </li>  
        </>
    );
}

export default Dorpdown;
