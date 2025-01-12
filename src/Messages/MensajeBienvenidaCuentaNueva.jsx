import HappyGreemFace from "../Images/HappyGreenFace.png";
import { useNavigate } from "react-router-dom";
import '../Css/MensajeBienvenidaCuentaNueva.css';

export default function MensajeBienvenidaCuentaNueva() {

    const navigate = useNavigate();
    
    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleSignupClick = () => {
        navigate('/');
    };

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
                <button className="CN-B-salir" onClick={handleSignupClick}>Salir</button>
                <button className="CN-B-iniciar" onClick={handleLoginClick}>Iniciar sesión</button>
            </div>
        </div>
    )
}