
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
                            Ingresa el correo electrónico asociado a tu cuenta. Te enviaremos un código de verificación
                            para
                            restablecer tu contraseña.
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="ejemplo@email.com" required/>
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
