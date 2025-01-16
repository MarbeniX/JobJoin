import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HappyGreemFace from "../Images/HappyGreenFace.png";
import { useNavigate } from "react-router-dom";
import '../Css/MensajeBienvenidaCuentaNueva.css';

const MensajeBienvenidaCuentaNueva = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
        toast.dismiss();
    };

    const handleSignupClick = () => {
        navigate('/');
        toast.dismiss();
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
                <button className="CN-B-iniciar" onClick={handleLoginClick}>Iniciar sesión</button>
            </div>
        </div>
    );
};

export const showWelcomeToast = () => {
    toast(<MensajeBienvenidaCuentaNueva />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};

export default MensajeBienvenidaCuentaNueva;