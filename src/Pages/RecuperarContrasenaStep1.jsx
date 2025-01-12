
import "../Css/RecuperarContrasena.css"
import formulario from "../Images/formulario.png";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import Header from "../Components/Headers/HeaderRecuperarContraseña";
import axios from "axios";


function RecuperarContrasena() {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const  handleChange = () => {
        navigate('/recuperarContrasena');
    };

    const handleReenviarCodigo= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/recuperarContrasena", {
               correo: email,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    };

    // Función para enviar el token al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if(!token){
            setMessage("Debes ingresar un código de verificación.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/users/recuperarContrasenaStep1", {
                token: token  // Enviar el token recibido
            });

            setMessage(response.data.message);
            if(response.data.redirectTo){
                navigate("/CrearUnaNuevaContraseña");
            }

        } catch (error) {
            setMessage(error.response?.data?.message || "Hubo un error al restablecer la contraseña.");
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
                                    type="button"
                                    onClick={handleReenviarCodigo} 
                                    className="left-link"
                                    >Reenviar código        
                                </button>

                                <button 
                                    onClick={handleChange} 
                                    className="right-link"
                                    >Editar correo ingresado
                                </button>
                            </div>

                            <div className="form-group">
                                <button type="submit">Enviar código</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RecuperarContrasena;
