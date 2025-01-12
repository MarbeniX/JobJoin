import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/ErrorIcon.png";

export default function MensajeServicioCancelado() {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={ErrorIcon} alt="HappyGreenFace" className='ErrorIcon'/>
                <div className="CuentaNueva-mensaje">
                    <p className='MensajeServicioCancelado-p'>Servicio cancelado</p>
                    <p>El trabajador ha sido notificado sobre la cancelación.</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="MensajeServicioCancelado-b1">Aceptar</button>
                <button className="MensajeServicioCancelado-b2">Explorar trabajadores</button>
            </div>
        </div>
    )
}