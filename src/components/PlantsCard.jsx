import {Link} from "react-router-dom";

const PlantsCard = ({nombrePlanta, imagenPlanta, fuenteImagen}) => {
  return (
    <li className="PlantsCard">
        <Link to="/monstera">
          <div className="ContainerImage">
            <img src={imagenPlanta} alt={nombrePlanta} />
          </div>
        </Link>  
        <span className="imgtitle">{nombrePlanta}</span>
        <span className="imgfont link">Foto de <a href={fuenteImagen}>Unsplash</a></span>
      </li>
  )
}

export default PlantsCard