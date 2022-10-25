function Login(){
    return (  
      <div className="form">
        <form>
            <h1>Iniciar Sesión</h1>
            <input type='email' />
            <input type='password' />
            <div col="2">
                <input type='checkbox'></input>
                <span>Acepto términos y condiciones</span>
            </div>
            <button type='Submit' className='secondarybutton'>Inciar Sesión</button>
        </form>
            <h4>¿Aún no tienes cuenta?</h4>
      </div>
    );
}

export default Login;