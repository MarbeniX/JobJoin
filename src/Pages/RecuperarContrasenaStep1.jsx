
import "../Css/RecuperarContrasena.css"
import formulario from "../Images/formulario.png";
import Header from "../Components/Headers/HeaderRecuperarContraseña";


function RecuperarContrasena() {
    return (
        <div className="recuperar-contraseña-div">
            <Header/>
            <main>
                <div className="container">
                    <img src={formulario} alt="Ilustración"/>
                    <div className="card">
                        <div className="logo">JobJoin</div>

                        <div className="title">Recupera tu cuenta</div>
                        <div className="description">
                            Hemos enviado un código de verificación a tu correo electrónico. Ingresa el código para continuar.
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Escribe el código que enviamos a tu correo" required/>
                            </div>
                            <div className="links-container">
                                <a href="https://www.mozilla.org/es-ES/" className="left-link">Reenviar código        </a>

                                <a href="https://www.mozilla.org/es-ES/" className="right-link">Editar correo ingresado</a>
                            </div>

                            <div className="form-group">
                                <button type="submit">Enviar código</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RecuperarContrasena;
