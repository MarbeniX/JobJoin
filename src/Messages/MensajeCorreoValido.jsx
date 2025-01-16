import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HappyGreemFace from "../Images/HappyGreenFace.png";
import '../Css/MensajeBienvenidaCuentaNueva.css';

const MensajeCorreoValido = () => {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={HappyGreemFace} alt="HappyGreenFace" className="HappyGreenFace"/>
                <div className="CuentaNueva-mensaje">
                    <h1>Correo valido</h1>
                    <p>Correo regitrado en JobJoin</p>
                </div>
            </div>
        </div>
    );
};

export const showValidEmailToast = () => {
    toast(<MensajeCorreoValido />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeCorreoValido;