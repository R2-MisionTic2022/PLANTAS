import logo from 'media/logo.png';

// function arrow 
const Header = () =>{
    return(
        <header>
          <ul className="navbar">
            <li>
              <img src={logo} alt="logo" className="logo" />
            </li>
            <li>
              <div class="buscar">
                <input placeholder="Encuentra tu planta" />
                <i class="fa fa-search iconobusqueda"></i>
              </div>
            </li>

            <li>
              <button className="button mainbutton">Iniciar Sesión</button>
            </li>

            <li>
              <button className="button secondarybutton">Registrarse</button>
            </li>
          </ul>
        </header>
        
    )
}


export default Header;