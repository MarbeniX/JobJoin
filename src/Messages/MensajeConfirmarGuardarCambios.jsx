import React from 'react';
import '../Css/MensajeBienvenidaCuentaNueva.css';
import ErrorIcon from "../Images/IniciaSesiónParaContinuar.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MensajeConfirmarGuardarCambios() {
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
                <button className="CN-B-iniciar">Guardar cambios</button>
            </div>
        </div>
    );
}

export const showConfirmSaveToast = () => {
    toast(<MensajeConfirmarGuardarCambios />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};