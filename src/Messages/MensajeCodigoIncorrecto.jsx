import React from 'react';
import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/ErrorIcon.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MensajeCodigoIncorrecto = ({ onClose }) => {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={ErrorIcon} alt="ErrorIcon" className='ErrorIcon'/>
                <div className="MensajeCodigoIncorrecto-text">
                    <h1>Código incorrecto</h1>
                    <p>El código ingresado no es válido. Por favor, verifica e intenta nuevamente.</p>
                </div>
            </div>
        </div>
    );
};

export const showIncorrectCodeToast = () => {
    toast(<MensajeCodigoIncorrecto onClose={() => toast.dismiss()} />, {
        position: "top-right",
        autoClose: 3000, // Cerrar automáticamente después de 3 segundos
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeCodigoIncorrecto;