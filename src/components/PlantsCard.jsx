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

export default PlantsCard