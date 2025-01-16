import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Components/Headers/Header.jsx';
import formulario from '../Images/formulario.png';
import '../Css/RecuperarContrasena.css';
import { ToastContainer } from 'react-toastify';
import { showInvalidEmailToast } from '../Messages/MensajeCorreoInvalido';
import { showValidEmailToast } from '../Messages/MensajeCorreoValido';
import 'react-toastify/dist/ReactToastify.css';


export default function RecuperarContrasena() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/recuperarContrasena", {
                correo: email,
            });
            setMessage(response.data.message);
            if (response.data.message === "Correo enviado correctamente") {
                showValidEmailToast();
                const timer = setTimeout(() => {
                    navigate("/recuperarContrasenaStep1"); // Cambia "/otra-pagina" por la ruta a la que deseas redirigir
                }, 1200); // 1.5 segundos

                return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
            } else {
                showInvalidEmailToast();
            }
        } catch (error) {
            setMessage(error.response.data.message);
            showInvalidEmailToast();
        }
    };

    useEffect(() => {
        if (message === "Correo enviado correctamente") {
            const timer = setTimeout(() => {
                navigate("/recuperarContrasenaStep1"); // Cambia "/otra-pagina" por la ruta a la que deseas redirigir
            }, 1500); // 2 segundos

            return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
        }
    }, [message, navigate]);

    return (
        <div className="recuperar-contraseña-div">
            <Header />
            <main>
                <div className="container">
                    <img src={formulario} alt="Ilustración" />
                    <div className="card">
                        <div className="logo">JobJoin</div>
                        <div className="title">Recupera tu cuenta</div>
                        <div className="description">
                            Ingresa el correo electrónico asociado a tu cuenta. Te enviaremos un código de verificación
                            para
                            restablecer tu contraseña.
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="email"
                                    placeholder="ejemplo@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <Link type="submit" onClick={handleSubmit}>Enviar código</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <ToastContainer />
        </div>
    );
}