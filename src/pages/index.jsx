import PlantsCard from 'components/PlantsCard';
import sansevieria from 'media/sansevieria.jpg';
import monstera from 'media/monstera.jpg';
import espatifilo from 'media/espatifilo.jpg';

function Index(){
    return (  
      <section>
        <h1>Tipos de Plantas</h1>
        <h2>Purificadoras de aire</h2>
        <ul className="PlantsCardContainer">
          <PlantsCard
            nombrePlanta="Sansevieria"
            imagenPlanta={sansevieria}
            fuenteImagen="https://unsplash.com/es/fotos/S-dv6gPcFpA"
          />
          <PlantsCard
            nombrePlanta="Monstera"
            imagenPlanta={monstera}
            fuenteImagen="https://unsplash.com/es/fotos/QBcafnnNsXo"
          />
          <PlantsCard
            nombrePlanta="Espatifilo"
            imagenPlanta={espatifilo}
            fuenteImagen="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/CDoPIWJDvvw"
          />
          </ul>
        </section>   
    );

}

export default Index;