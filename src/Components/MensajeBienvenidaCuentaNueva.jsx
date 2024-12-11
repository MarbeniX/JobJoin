import HappyGreemFace from "../Images/HappyGreenFace.png";
import '../Css/MensajeBienvenidaCuentaNueva.css';

export default function MensajeBienvenidaCuentaNueva() {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={HappyGreemFace} alt="HappyGreenFace" className="HappyGreenFace"/>
                <div className="CuentaNueva-mensaje">
                    <h1>¡Bienvenido a JobJoin!</h1>
                    <p>Tu cuenta ha sido creada exitosamente.</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Salir</button>
                <button className="CN-B-iniciar">Iniciar sesión</button>
            </div>
        </div>
    )
}