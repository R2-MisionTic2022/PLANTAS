import './styles/App.css';
import sansevieria from './media/sansevieria.jpg';
import monstera from './media/monstera.jpg';
import espatifilo from './media/espatifilo.jpg';
import logo from './media/logo.png';

function App() {
  return (
    <div className="App">     
      <header>
        <ul className="navbar">
          <li>
            <img src={logo} alt="logo" className="logo"/> 
          </li>
          <li>
            <div class="buscar"><input placeholder="Encuentra tu planta"/>
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

      <main>
        <section>
          <h1>Tipos de Plantas</h1>
          <h2>Purificadoras de aire</h2>
            <ul className="PlantsCardContainer">
              <PlantsCard nombrePlanta="Sansevieria" imagenPlanta={sansevieria} fuenteImagen="https://unsplash.com/es/fotos/S-dv6gPcFpA"/>
              <PlantsCard nombrePlanta="Monstera" imagenPlanta={monstera} fuenteImagen="https://unsplash.com/es/fotos/QBcafnnNsXo"/>
              <PlantsCard nombrePlanta="Espatifilo" imagenPlanta={espatifilo} fuenteImagen="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/CDoPIWJDvvw"/>
              
  
  
            </ul>      
        </section>
      </main>

      <footer>
        <div>
          ©CopyRight 2022 <a href="mailto:natics07@gmail.com" className="link">Nat</a>
        </div>
      </footer>
    </div>
  );
}

function PlantsCard({nombrePlanta, imagenPlanta, fuenteImagen}){
  return(
    <li className="PlantsCard">
      <div className="ContainerImage">
        <img src={imagenPlanta} alt={nombrePlanta} />
      </div>
      <span className="imgtitle">{nombrePlanta}</span>
      <span className="imgfont link">Foto de <a href={fuenteImagen}>Unsplash</a></span>
      </li>
  );
}

  
export default App;
