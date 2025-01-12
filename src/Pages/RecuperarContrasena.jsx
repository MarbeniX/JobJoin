import "../Css/RecuperarContrasena.css"
import Header from "../Components/Headers/HeaderRecuperarContraseña"
import React, { useState } from "react";
import formulario from "../Images/formulario.png";
import axios from "axios";


function RecuperarContrasena() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/users/recuperarContrasena", {
               correo: email,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.message);
        }
    }
    

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
                                <button type="submit">Enviar código</button>
                            </div>
                        </form>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default RecuperarContrasena;
