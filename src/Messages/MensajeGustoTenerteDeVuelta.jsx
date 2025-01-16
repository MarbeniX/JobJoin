import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HappyGreemFace from "../Images/HappyGreenFace.png";
import '../Css/MensajeBienvenidaCuentaNueva.css';

const MensajeGustoTenerteDeVuelta = () => {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={HappyGreemFace} alt="HappyGreenFace" className="HappyGreenFace"/>
                <div className="CuentaNueva-mensaje">
                    <h1>¡Bienvenido!</h1>
                    <p>¿Qué trabajo te trae de vuelta?</p>
                </div>
            </div>
        </div>
    );
};

export const showWelcomeBackToast = () => {
    toast(<MensajeGustoTenerteDeVuelta />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeGustoTenerteDeVuelta;