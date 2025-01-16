import React from 'react';
import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/IniciaSesiónParaContinuar.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, Navigate } from 'react-router-dom';

const MensajeEstasSeguroDeSalir = ({ onClose }) => {

    return (
        <div className="MensajeCancelarGuardar-div">
            <div className="MensajeCancelarGuardar-inicio">
                <img src={ErrorIcon} alt="ErrorIcon" className='ErrorIcon'/>
                <div className="MensajeCancelarGuardar-mensaje">
                    <h1>¿Estás seguro de salir?</h1>
                    <p>Si sales ahora, los cambios realizados no se guardarán.</p>
                </div>
            </div>
            <div className="MensajeCancelarGuardar-CajaBotones">
                <Link to="/perfil-trabajador-comentarios" className="CN-B-salir" onClick={onClose}>Salir</Link>
                <button className="CN-B-iniciar" onClick={onClose}>Continuar Editando</button>
            </div>
        </div>
    );
};

export const showExitConfirmationToast = () => {
    toast(<MensajeEstasSeguroDeSalir onClose={() => toast.dismiss()} />, {
        position: "top-right",
        autoClose: 3000, // Cerrar automáticamente después de 3 segundos
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeEstasSeguroDeSalir;