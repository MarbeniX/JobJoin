import Header from "../Components/Headers/HeaderRecuperarContraseña.jsx";
import "../Css/RecuperarContrasena.css";
import formulario from "../Images/formulario.png";
import { useState, useEffect } from "react";
import { useUserContext } from '../UserProvider/UserProvider.jsx';
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showUpdatedPassword } from "../Messages/MensajeContraseñaActualizada.jsx";

export default function CrearNuevaContraseña() {
    const { user, setUser } = useUserContext();
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const userId = user?.userId || JSON.parse(localStorage.getItem("user"))?.userId;

    useEffect(() => {
        if (!user && localStorage.getItem("user")) {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setUser(storedUser);
        }

        if (!userId) {
            console.warn("Usuario no encontrado.");
            setMessage("Usuario no autenticado.");
        }
    }, [user, userId, setUser]);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!userId) {
            alert("Usuario no autenticado");
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:5000/password/crearNuevaContrasena", {
                userId,
                nuevaContraseña: password,
            });

            if (response.status === 200) {
                showUpdatedPassword();
                setTimeout(() => {
                    window.location.href = response.data.redirectTo;
                }, 1200);
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

                            {message && <div className="error-message">{message}</div>} {/* Mostrar mensaje de error */}

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
