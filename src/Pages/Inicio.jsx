import React, { useState } from "react";
import axios from "axios";
import Header from "../Components/Headers/Header.jsx";
import Footer from "../Components/Footer.jsx";
import PeopleWorking from '../Images/WorkingPeople.png';
import GoogleLogo from "../Images/GoogleLogo.png";
import InicioFrame from "../Images/InicioDivisor.png";
import EtiquetaConectar from "../Images/EtiquetaConectar.png";
import EtiquetaDescubrir from "../Images/EtiquetaDescubrir.png";
import EtiquetaLocalizar from "../Images/localizar.png";
import EtiquetaMonitorear from "../Images/EtiquetaMonitorear.png";
import AboutFrame from "../Images/About Frame.png";
import MensajeBienvenidaCuentaNueva from "../Messages/MensajeBienvenidaCuentaNueva.jsx";
import { Link } from "react-router-dom";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";

export default function Inicio() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        contraseña: "",
    });

    const [mostrarBienvenida, setMostrarBienvenida] = useState(false);

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

        if (!formData.nombre.trim()) newErrors.nombre = true;
        if (!formData.apellido.trim()) newErrors.apellido = true;
        if (!formData.email.trim()) newErrors.email = true;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = true;
        if (!formData.contraseña.trim()) newErrors.contraseña = true;
        else if (formData.contraseña.length < 6) newErrors.contraseña = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Manejar el submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await axios.post("http://localhost:5000/users/register", {
                    nombre: `${formData.nombre} ${formData.apellido}`,
                    correo: formData.email,
                    contraseña: formData.contraseña,
                    tipoUsuario: "Empleador",
                });

                if (response.data.success) {
                    setServerResponse("Registro exitoso. Redirigiendo al inicio...");
                    setTimeout(() => navigate("/bienvenida-cuenta-nueva"), 1000);
                } else {
                    setServerResponse(response.data.message || "Error al registrar usuario.");
                }
            } catch (error) {
                if (error.response && error.response.data && error.response.data.message) {
                    setServerResponse(error.response.data.message);
                } else {
                    setServerResponse("Error al registrar usuario. Verifica los datos e inténtalo nuevamente.");
                }
            }
        } else {
            setServerResponse("Por favor, completa todos los campos correctamente.");
        }
    };

    return (
        <div className="inicio-main-div">
            <Header />
            <div className="inicio-div">
                <div className="inicio-presentacion-div">
                    <img src={PeopleWorking} alt="PeopleWorking" />
                    <h1>La persona ideal para el <br />trabajo que necesitas, <br /><nav>en minutos</nav></h1>
                    <p>Únete a nuestra plataforma y conecta con trabajadores y <br /> empleadores de confianza</p>
                </div>
                <form className="inicio-inputs" onSubmit={handleSubmit}>
                    <button type="button" className="inicio-button-google">
                        <img src={GoogleLogo} alt="GoogleLogo" />
                        <span>Continuar con Google</span>
                    </button>
                    <img src={InicioFrame} alt="InicioFrame" className="inicio-frame" />
                    <div className="input-data">
                        <div className="input-nombre-apellido">
                            <label style={{ color: errors.nombre ? "red" : "inherit" }}>
                                Nombre {errors.nombre && "*"}
                            </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Nombre"
                            />
                            <label style={{ color: errors.apellido ? "red" : "inherit" }}>
                                Apellido {errors.apellido && "*"}
                            </label>
                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                placeholder="Apellido"
                            />
                        </div>
                        <div className="input-email-contraseña">
                            <label style={{ color: errors.email ? "red" : "inherit" }}>
                                Correo {errors.email && "*"}
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Correo"
                                className="input-email"
                            />
                            <label style={{ color: errors.contraseña ? "red" : "inherit" }}>
                                Contraseña {errors.contraseña && "*"}
                            </label>
                            <input
                                type="password"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleChange}
                                placeholder="Contraseña"
                                className="input-contraseña"
                            />
                        </div>
                    </div>
                    <div className="input-more-info">
                        <h3>¿Ya tienes cuenta? Da click <nav onClick={() => navigate("/login")}>aquí</nav></h3>
                        <p>
                            Al registrarte, aceptas nuestro Aviso de privacidad y consientes el tratamiento de tus datos según lo establecido con nuestros Términos y condiciones.
                        </p>
                        <button type="submit">Continuar</button>
                        {serverResponse && <p className="server-response">{serverResponse}</p>}
                    </div>
                </form>
                <div className="inicio-about">
                    <div className="about-txt">
                        <img src={AboutFrame} alt="About Frame" className="AboutFrame" />
                        <h3>Descubre más con JobJoin</h3>
                        <p>Encuentra servicios confiables para resolver tus necesidades</p>
                    </div>
                    <div className="about-images">
                        <div className="about-localizar">
                            <img src={EtiquetaLocalizar} alt="EtiquetaLocalizar" />
                            <p>Localiza <br /> trabajadores <br /> cerca de ti</p>
                        </div>
                        <div className="about-descubrir">
                            <img src={EtiquetaDescubrir} alt="EtiquetaDescubrir" />
                            <p>Descubre <br /> perfiles <br /> detallados</p>
                        </div>
                        <div className="about-conectar">
                            <img src={EtiquetaConectar} alt="EtiquetaConectar" />
                            <p>Conecta con <br /> los mejores <br /> en tu zona</p>
                        </div>
                        <div className="about-monitorear">
                            <img src={EtiquetaMonitorear} alt="EtiquetaMonitorear" />
                            <p>Monitorea el <br /> avance de tus <br /> proyectos contratados</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
