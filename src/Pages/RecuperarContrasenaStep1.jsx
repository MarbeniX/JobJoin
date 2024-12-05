
import "../Css/RecuperarContrasena.css"
import JobJoin from "../Images/JobJoin.png";
import formulario from "../Images/formulario.png";


function RecuperarContrasena() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <img src={JobJoin} alt="Ilustración"/>
                    </div>
                </div>
            </header>
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
                            <div>
                                <a href={RecuperarContrasena}>Reenviar código        </a>

                                <a href={RecuperarContrasena}>Editar correo ingresado</a>
                            </div>

                            <div className="form-group">
                                <button type="submit">Enviar código</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RecuperarContrasena;
