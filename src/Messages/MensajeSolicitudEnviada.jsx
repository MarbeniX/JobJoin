import '../Css/MensajeBienvenidaCuentaNueva.css';
import HappyGreenFAce from "../Images/HappyGreenFace.png";

export default function MensajeSolicitudEnviada() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={HappyGreenFAce} alt="HappyGreenFace" className='ErrorIcon'/>
                <div className="CuentaNueva-mensaje">
                    <p className='MensajeSolicitudEnviada-p'>¿Solicitud enviada con exito!</p>
                    <p>Puedes revisar el estado de tu solicitud en elmuro de trabajo activo</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-iniciar">Aceptar</button>
            </div>
        </div>
    )
}