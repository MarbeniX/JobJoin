import React from 'react';
import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/IniciaSesiónParaContinuar.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MensajeCodigoCorrecto = ({ onClose }) => {
    return (
        <div className="ConfirmarGuardarCambios-div">
            <div className="ConfirmarGuardarCambios-inicio">
                <div>
                    <img src={ErrorIcon} alt="ErrorIcon" className='ErrorIcon'/>
                </div>
                <div className="MensajeCodigoCorrecto-text">
                    <h1>Codigo correcto</h1>
                </div>
            </div>
        </div>
    );
};

export const showCorrectCodeToast = () => {
    toast(<MensajeCodigoCorrecto onClose={() => toast.dismiss()} />, {
        position: "top-right",
        autoClose: false, // No cerrar automáticamente
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeCodigoCorrecto;