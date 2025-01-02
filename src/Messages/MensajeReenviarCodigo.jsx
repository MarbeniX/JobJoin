import '../Css/MensajeBienvenidaCuentaNueva.css';
import MailIcon from "../Images/MailIcon.png";

export default function MensajeReenviarCodigo() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={MailIcon} alt="HappyGreenFace" className='MailIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Reenviar código</h1>
                    <p>Se enviará otro código de verificación a</p>
                    <p className='CorreoUsuario'>correo@email.com</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Cancelar</button>
                <button className="CN-B-iniciar">Reenviar código</button>
            </div>
        </div>
    )
}