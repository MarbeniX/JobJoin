import "../Css/RecuperarContrasena.css"
import Header from "../Components/Headers/HeaderRecuperarContraseña"
import formulario from "../Images/formulario.png";


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
        </div>
    );
}

export default RecuperarContrasena;
