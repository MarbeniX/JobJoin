import Header from "../Components/Headers/HeaderRecuperarContraseña.jsx";
import "../Css/RecuperarContrasena.css";
import formulario from "../Images/formulario.png";
import { useState } from "react";
import { useUserContext } from '../UserProvider/UserProvider.jsx';
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showUpdatedPassword } from "../Messages/MensajeContraseñaActualizada.jsx";

export default function CrearNuevaContraseña() {
    const { user } = useUserContext();
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!user) {
            alert("Usuario no autenticado");
            return;
        }
    
        try {
            // Realiza la solicitud POST directamente con los datos del cuerpo
            const response = await axios.post("http://localhost:5000/password/crearNuevaContrasena", {
                userId: user.idUsuario,
                nuevaContraseña: password,
            });
    
            // Respuesta exitosa
            if (response.status === 200) {
                showUpdatedPassword();
                setTimeout(() => {
                    window.location.href = response.data.redirectTo; // Redirigir al login
                }, 1200); // Esperar 1.5 segundos
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un problema al conectarse al servidor");
        }
    };
    
    return (
        <div className="recuperar-contraseña-div">
            <Header />
            <main>
                <div className="container">
                    <img src={formulario} alt="Ilustración" />
                    <div className="card">
                        <div className="logo">JobJoin</div>

                        <div className="title">Crea una nueva contraseña</div>
                        <div className="description">
                            Establece una contraseña segura para proteger tu cuenta.
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Ingresa tu nueva contraseña"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                                <button type="submit">Actualizar contraseña</button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>
                </div>
            </main>
        </div>
    );
}
