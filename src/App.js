import logo from './logo.svg';
import './styles/App.css';
import sansevieria from './media/sansevieria.jpg';

function App() {
  return (
    <div className="App">     
      <header>
        <ul className="navbar">
        <li>Logo</li>
        <li>Busqueda</li>
        <li>Registro</li>
        <li>Iniciar Sesión</li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Tipos de Plantas</h1>
          <ul className="BreedCardContainer"></ul>
          <li className="BreedCard"></li>
            <div className="ConenedorImagen">
              <img src={sansevieria} alt="sansevieria" />
              Foto de <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> en <a href="https://unsplash.com/es/s/fotos/planta-lengua-de-suegra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
            <li className="BreedCard"></li>
            <div className="ConenedorImagen">
              <img src={sansevieria} alt="sansevieria" />
              Foto de <a href="https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kelly Sikkema</a> en <a href="https://unsplash.com/es/s/fotos/planta-lengua-de-suegra?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>


            

        </section>


      </main>
    </div>
  );
}

export default App;
