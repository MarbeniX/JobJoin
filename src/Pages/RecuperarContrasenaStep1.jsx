import "../Css/RecuperarContrasena.css"
import formulario from "../Images/formulario.png";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Header from "../Components/Headers/HeaderRecuperarContraseña";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { showIncorrectCodeToast } from '../Messages/MensajeCodigoIncorrecto';
import { showCorrectCodeToast } from '../Messages/MensajeConfirmaciónReenvioCodigo';
import 'react-toastify/dist/ReactToastify.css';

function RecuperarContrasena() {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const  handleChange = () => {
        navigate('/recuperarContrasena');
    };

    // Función para enviar el token al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/recuperarContrasenaStep1", {
                token: token  // Enviar el token recibido
            });

            setMessage(response.data.message);
            if (response.data.redirectTo) {
                showCorrectCodeToast();
                setTimeout(() => {
                    navigate("/crear-nueva-contrasena");
                }, 1500); // 1.5 segundos
            }else{
                showIncorrectCodeToast();
            }
        } catch (error) {
            setMessage("Error al verificar el token. Inténtalo nuevamente.");
            showIncorrectCodeToast();
        }
    };
        

    return (
        <div className="recuperar-contraseña-div">
            <Header/>
            <main>
                <div className="container">
                    <img src={formulario} alt="Ilustración"/>
                    <div className="card">
                        <div className="logo">JobJoin</div>
                        <div className="title">Recupera tu cuenta</div>
                        <div className="description">
                            Hemos enviado un código de verificación a tu correo electrónico. Ingresa el código para continuar.
                        </div>
                        
                        <form>
                            <div className="form-group">
                                <input type="text" 
                                        placeholder="Escribe el código que enviamos a tu correo" 
                                        required
                                        value={token}
                                        onChange={(e) => setToken(e.target.value)}
                                    />
                            </div>
                            <div className="links-container">
                                <button 
                                    onClick={handleChange} 
                                    className="right-link"
                                    >Editar correo ingresado
                                </button>
                            </div>

                            <div className="form-group">
                                <button type="submit"
                                    onClick={handleSubmit}
                                >Enviar código</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer/>
        </div>
    );
}

export default RecuperarContrasena;
