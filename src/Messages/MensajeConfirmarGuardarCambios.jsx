import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/IniciaSesiónParaContinuar.png";

export default function MensajeConfirmarGuardadrCodigo() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={ErrorIcon} alt="HappyGreenFace" className='ErrorIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>¿Seguro de guardar cambios?</h1>
                    <p>Una vez guardados, los cambios serán aplicados de forma permanente.</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Cancer</button>
                <button className="CN-B-iniciar">Guardar cambios</button>
            </div>
        </div>
    )
}