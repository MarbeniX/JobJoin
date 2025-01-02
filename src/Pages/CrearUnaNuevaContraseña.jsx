import Header from "../Components/HeaderRecuperarContraseña";
import "../Css/RecuperarContrasena.css"
import formulario from "../Images/formulario.png";

export default function CrearNuevaContraseña() {
    return (
        <div className="recuperar-contraseña-div">
            <Header/>
            <main>
                <div className="container">
                    <img src={formulario} alt="Ilustración"/>
                    <div className="card">
                        <div className="logo">JobJoin</div>

                        <div className="title">Crea una nueva contraseña</div>
                        <div className="description">
                            Establece una contraseña segura para proteger tu cuenta.
                        </div>
                        <form>
                            <div className="form-group">
                                <input type="email" placeholder="Ingresa tu contraseña" required/>
                            </div>

                            <div className="form-group">
                                <button type="submit">Actualizar contraseña</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}