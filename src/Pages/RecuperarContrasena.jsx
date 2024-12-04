import React from 'react';
import '../Css/index.css';
import JobJoin from "../Images/JobJoin.png";
import formulario from "../Images/formulario.png";

function RecuperarContrasena() {
    return (
        <div className="inicio-main-div">
            <header className="inicio-header">
                <img src={JobJoin} alt="Imagen de Recuperar Contraseña" />
                <h1 className="inicio-h1">Recupera tu cuenta</h1>
                <button className="inicio-header-button inicio-login-button">
                    Iniciar sesión
                </button>
                <button className="inicio-header-button inicio-signup-button">
                    Registrarse
                </button>
            </header>
            <div className="inicio-direccion-div">
                <img
                    src={formulario}
                    alt="People working"
                    className="PeopleWorking"
                />
                <h2 className="inicio-direccion-main-h2">
                    Recupera tu <span className="inicio-direccion-main-h2-nav">cuenta</span>
                </h2>
                <p>
                    Ingresa el correo electrónico asociado a tu cuenta. Te enviaremos un
                    código para restablecer tu contraseña.
                </p>
                <input
                    type="email"
                    placeholder="ejemplo@email.com"
                    className="inicio-correo-button inicio-email-button"
                />
                <button className="inicio-correo-button">
                    Enviar código
                </button>
            </div>
        </div>
    );
}

export default RecuperarContrasena;
