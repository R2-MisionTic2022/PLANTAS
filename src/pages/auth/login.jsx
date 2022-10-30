import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import logo from 'media/logo.png';
import Button from 'react-bootstrap/Button';

function Login(){
    return (  
      <div>    
        <form className="formAuth">   
            <div>
                <img src={logo} alt="logo" className="logo" />
            </div>
            <div>
            <h2>Iniciar Sesión</h2>
            </div>
            <div>
                <input type='email' />
            </div>
            <div>
            <input type='password' />
            </div>
            <div col="2">
                <input type='checkbox'></input>
                <span>Acepto términos y condiciones</span>
            </div>
                <Link to='/admin'>
                    <Button type='Submit' variant="primary">Inciar Sesión</Button>
                </Link >
            <div col="2">
                <span>¿Aún no tienes cuenta?  </span>
                <Link to='/registro'>Registrate</Link>
            </div>
        </form>
            
      <Outlet />
      </div>
    );
}

export default Login;