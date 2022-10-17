import './styles/App.css';
import sansevieria from './media/sansevieria.jpg';
import monstera from './media/monstera.jpg';
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
              <PlantsCard nombrePlanta="Sansevieria" imagenPlanta={sansevieria} />
              <PlantsCard nombrePlanta="Monstera" imagenPlanta={monstera}/>
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

function PlantsCard(props){
  return(
    <li className="PlantsCard">
      <div className="ContainerImage">
        <img src={props.imagenPlanta} alt="imagen planta" />
      </div>
      <span className="imgtitle">{props.nombrePlanta}</span>
      <span className="imgfont">Foto de <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="link">Kelly Sikkema</a> en <a href="https://unsplash.com/es/s/fotos/planta-lengua-de-suegra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" className="link" >Unsplash</a></span>
      </li>
  );
}

export default App;
