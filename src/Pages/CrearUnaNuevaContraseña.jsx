import Header from "../Components/Headers/HeaderRecuperarContraseña.jsx";
import "../Css/RecuperarContrasena.css";
import formulario from "../Images/formulario.png";
import { useState } from "react";
import { useUserContext } from '../UserProvider/UserProvider.jsx';
import axios from "axios";

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
            const response = await axios.post("http://localhost:5000/users/crearNuevaContrasena", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId: user.idUsuario, nuevaContraseña: password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert(data.message);
            } else {
                alert(data.message || "Error al actualizar la contraseña");
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
                    </div>
                </div>
            </main>
        </div>
    );
}
