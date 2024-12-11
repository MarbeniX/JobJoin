import '../Css/MensajeBienvenidaCuentaNueva.css';
import CandadoIcon from "../Images/CandadoIcon.png";

export default function MensajeReenviarCodigo() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={CandadoIcon} alt="HappyGreenFace" className='CandadoIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Contraseña actualizada</h1>
                    <p>Hemos actualizado su contraseña</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Salir</button>
                <button className="CN-B-iniciar">Inisiar sesión</button>
            </div>
        </div>
    )
}