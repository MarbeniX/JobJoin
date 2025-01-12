import '../Css/MensajeBienvenidaCuentaNueva.css';
import CandadoIcon from "../Images/CandadoIcon.png";
import { useNavigate } from 'react-router-dom';

export default function MensajeReenviarCodigo() {

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
                <img src={CandadoIcon} alt="HappyGreenFace" className='CandadoIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Contraseña actualizada</h1>
                    <p>Hemos actualizado su contraseña</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir" onClick={handleSignupClick}>Salir</button>
                <button className="CN-B-iniciar" onClick={handleLoginClick}>Iniciar sesión</button>
            </div>
        </div>
    )
}