import React from 'react';
import '../Css/MensajeBienvenidaCuentaNueva.css';
import CandadoIcon from "../Images/CandadoIcon.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MensajeContraseñaActualizada = ({ onClose }) => {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={CandadoIcon} alt="CandadoIcon" className='CandadoIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Contraseña actualizada</h1>
                    <p>Hemos actualizado su contraseña</p>
                </div>
            </div>
        </div>
    );
};

export const showUpdatedPassword = () => {
    toast(<MensajeContraseñaActualizada onClose={() => toast.dismiss()} />, {
        position: "top-right",
        autoClose: 3000, // Cerrar automáticamente después de 3 segundos
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeContraseñaActualizada;