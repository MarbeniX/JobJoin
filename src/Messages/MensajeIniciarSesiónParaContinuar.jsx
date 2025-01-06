import '../Css/MensajeBienvenidaCuentaNueva.css';
import IniciarSesiónIcon from '../Images/IniciaSesiónParaContinuar.png';

export default function MensajeReenviarCodigo() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={IniciarSesiónIcon} alt="HappyGreenFace" className='MailIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Inicia sesión para continuar</h1>
                    <p>Debes iniciar sesión para contratar un servicio o ver el perfil completo del trabajador.</p>
                </div>
            </div>
            <div className="mensajeIniciarSesion-CuentaNueva-botones">
                <button className='message_salir button'>Salir</button>
                <button className='message_crearCuenta button'>Crear una cuenta</button>
                <button className='message_iniciarSesion button'>Iniciar sesión</button>
            </div>
        </div>
    )
}