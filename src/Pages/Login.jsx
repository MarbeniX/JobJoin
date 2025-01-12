import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Components/Headers/HeaderSoloBuscar";
import Footer from "../Components/Footer";
import GoogleLogo from "../Images/GoogleLogo.png";
import InicioFrame from "../Images/InicioDivisor.png";
import "../Css/Login.css";
import { useUserContext } from "../UserProvider/UserProvider";

export default function Login() {
    const { user, setUser} = useUserContext();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [serverResponse, setServerResponse] = useState("");

    // Manejar cambios en los inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Validaciones
    const validate = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = true;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
        if (!formData.password.trim()) newErrors.password = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejar el inicio de sesión
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validate()) {
            try {
                const response = await axios.post("http://localhost:5000/users/login", {
                    correo: formData.email,
                    contraseña: formData.password,
                });

                if (response.data.success) {
                    //Guardar usuario en el contexto
                    setUser(response.data.user);
                    //Guardar usuario en el local storage
                    localStorage.setItem("user", JSON.stringify(response.data.user));

                    setServerResponse("Inicio de sesión exitoso. Redirigiendo...");
                    setTimeout(() => navigate("/busqueda-con-registro"), 1000);
                } else {
                    setServerResponse(response.data.message || "Credenciales incorrectas.");
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    // Respuesta del servidor con un código de estado fuera de 2xx
                    setServerResponse(error.response.data.message || "Error en la solicitud al servidor.");
                } else if(error.request){
                    // No se recibió respuesta del servidor
                    setServerResponse("Error al conectar con el servidor. Inténtalo nuevamente.");
                } else {
                    // Error en la configuración de la solicitud
                    setServerResponse("Error al conectar con el servidor. Inténtalo nuevamente.");
                }
            }
        } else {
            setServerResponse("Por favor, completa todos los campos correctamente.");
        }
    };

    return (
        <>
            <Header />
            <div className="login-container">
                <p className="login-container-p1">¡Bienvenido de nuevo!</p>
                <p>
                    Nos alegra verte de nuevo. Accede a tu cuenta, conecta con <br />
                    personas y gestiona tus contrataciones fácilmente
                </p>
                <button type="button" className="login-container-google-button">
                    <img src={GoogleLogo} alt="GoogleLogo" />
                    Continuar con Google
                </button>
                <img src={InicioFrame} alt="InicioFrame" className="login-inicio-frame" />
                <form className="login-form" onSubmit={handleSubmit}>
                    <label style={{ color: errors.email ? "red" : "inherit" }}>
                        Correo {errors.email && "*"}
                    </label>
                    <input
                        type="text"
                        name="email"
                        placeholder="ejemplo@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <label style={{ color: errors.password ? "red" : "inherit" }}>
                        Contraseña {errors.password && "*"}
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Continuar</button>
                </form>
                {serverResponse && <p className="server-response">{serverResponse}</p>}
                <p>
                    ¿No tienes una cuenta? Da click <Link to={"/"} className="login-link">aquí</Link>
                </p>
                <p>
                    ¿Olvidaste tu contraseña? Da click <Link to={"/recuperarContrasena"} className="login-link">aquí</Link>
                </p>
            </div>
            <Footer />
        </>
    );
}
