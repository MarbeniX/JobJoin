import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/ErrorIcon.png";

export default function MensajeReenviarCodigo() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={ErrorIcon} alt="HappyGreenFace" className='ErrorIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Código incorrecto</h1>
                    <p>El código ingresado no es válido. Por favor, verifica e intenta nuevamente.</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Salir</button>
                <button className="CN-B-iniciar">Reintentar</button>
            </div>
        </div>
    )
}