import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/IniciaSesiónParaContinuar.png";

export default function MensajeEstasSeguroDeSalir() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={ErrorIcon} alt="HappyGreenFace" className='ErrorIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>¿Estas seguro de salir?</h1>
                    <p>Si sales ahora, los cambios realizados no se guardarán.</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Salir</button>
                <button className="CN-B-iniciar">Continuar Editando</button>
            </div>
        </div>
    )
}