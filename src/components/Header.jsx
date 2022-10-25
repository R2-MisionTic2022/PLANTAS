import logo from 'media/logo.png';
import {Link} from "react-router-dom";

// function arrow 
const Header = () =>{
    return(
        <header>
          <ul className="navbar">
            <li>
            <Link to="/index">
            <img src={logo} alt="logo" className="logo" />
            </Link>
            </li>
            <li>
              <div class="buscar">
                <input placeholder="Encuentra tu planta" />
                <i class="fa fa-search iconobusqueda"></i>
              </div>
            </li>

            <li>
              <Link to="/Login">
              <button className="button mainbutton">Iniciar Sesión</button>
              </Link>
            </li>

            <li>
              <button className="button secondarybutton">Registrarse</button>
            </li>
          </ul>
        </header>
        
    )
}


export default Header;