import logo from 'media/logo.png';

function Login(){
    return (  
      <div className="mainContainer">    
        <form>   
            <img src={logo} alt="logo" className="logo" />
            <h1>Iniciar Sesión</h1>
            <input type='email' />
            <input type='password' />
            <div col="2">
                <input type='checkbox'></input>
                <span>Acepto términos y condiciones</span>
            </div>
            <button type='Submit' className='secondarybutton'>Inciar Sesión</button>
        </form>
            <span>¿Aún no tienes cuenta?</span>
      </div>
    );
}

export default Login;