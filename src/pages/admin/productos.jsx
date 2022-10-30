import React, {useEffect } from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const Plantas = () => {
  const [mostrarTabla, setMostrarTabla] = useState(false);
  const [textoBoton, setTextoBoton] = useState('Crear nueva planta');
  
  useEffect(() =>{
    if(mostrarTabla)
    setTextoBoton('Crear nueva planta')
    else {
      setTextoBoton('Mostrar todas las plantas')
    }
  },[mostrarTabla]);

  return (
    <div>
      <h2>Página administración de plantas</h2>
      <button onClick={() => [setMostrarTabla(!mostrarTabla)]} className="button">{textoBoton}</button>
      {mostrarTabla ? <TablaPlantas />:<FormularioCreacionPlantas /> }      
    </div>
  );
};

const TablaPlantas = () => {
  return (
   <div>
    Esto es un div pero debe ser la tabla mostrando todos las plantas
   </div> 
  );
};

const FormularioCreacionPlantas = () => {
  return (
    <div>
      <form style={{display:"flex", marginTop:50}}>
        <h2>Formulario de creación</h2>
        <input onChange={(e) => {console.log(e.target.value)}} type="text" placeholder="Referencia"/>
        <input type="text" placeholder="Categoria"/>
        <input type="text" placeholder="Tipo planta" />
        <input type="number" placeholder="Precio"/>
        <div col="2">
          <input type="checkbox"></input>
          <span>Habilitado</span>
        </div>
        <Button type="Submit" variant="primary">
        Guardar
        </Button>
      </form>
   </div> 
  );
};


//   return (
//     <div>
//       <h1>Administración de Productos</h1>
//       
//     </div>
//   );
// };

export default Plantas;
