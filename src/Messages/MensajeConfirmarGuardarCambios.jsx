import React from 'react';
import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/IniciaSesiónParaContinuar.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const MensajeConfirmarGuardarCambios = ({ onClose }) => {
    return (
        <div className="ConfirmarGuardarCambios-div">
            <div className="ConfirmarGuardarCambios-inicio">
                <div>
                    <img src={ErrorIcon} alt="ErrorIcon" className='ErrorIcon'/>
                </div>
                <div className="ConfiramrGuardarCambios-mensaje">
                    <h1>¿Seguro de guardar cambios?</h1>
                    <p>Una vez guardados, los cambios serán aplicados de forma permanente.</p>
                </div>
            </div>
            <div className="ConfirmarGuardarCambios-botones">
                <Link to="/perfil-trabajador-comentarios" className="CN-B-iniciar" onClick={onClose}>Guardar cambios</Link>
            </div>
        </div>
    );
};

export const showConfirmSaveToast = () => {
    toast(<MensajeConfirmarGuardarCambios onClose={() => toast.dismiss()} />, {
        position: "top-right",
        autoClose: 3000, // Cerrar automáticamente después de 3 segundos
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeConfirmarGuardarCambios;