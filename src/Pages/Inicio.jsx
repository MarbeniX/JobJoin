import React, { useState } from "react";
import axios from "axios";
import Header from "../Components/Headers/Header.jsx";
import Footer from "../Components/Footer.jsx";
import PeopleWorking from '../Images/WorkingPeople.png';
import GoogleLogo from "../Images/GoogleLogo.png";
import InicioFrame from "../Images/InicioDivisor.png";
import EtiquetaConectar from "../Images/EtiquetaConectar.png";
import EtiquetaDescubrir from "../Images/EtiquetaDescubrir.png";
import EtiquetaComunicar from "../Images/contactar.png";
import EtiquetaMonitorear from "../Images/EtiquetaMonitorear.png";
import AboutFrame from "../Images/About Frame.png";
import MensajeBienvenidaCuentaNueva from "../Messages/MensajeBienvenidaCuentaNueva.jsx";
import "../Css/index.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { showWelcomeToast } from '../Messages/MensajeBienvenidaCuentaNueva';
import 'react-toastify/dist/ReactToastify.css';


export default function Inicio() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        email: "",
        contraseña: "",
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

        if (!formData.nombre.trim()) newErrors.nombre = true;
        if (!formData.apellido.trim()) newErrors.apellido = true;
        if (!formData.email.trim()) {
            newErrors.email = true;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = true;
        }
        if (!formData.contraseña.trim()){
            newErrors.contraseña = true;
        }else if (formData.contraseña.length < 6){
            newErrors.contraseña = true;
        }

        setErrors(newErrors); // Actualiza el estado de errores
        return Object.keys(newErrors).length === 0; //Devuelve si todo está correcto
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
                    showWelcomeToast();
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
                            {/* <label style={{ color: errors.nombre ? "red" : "inherit" }}>
                               Nombre {errors.nombre && "*"}
                            </label>*/}
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Nombre (Obligatorio)"
                                className={errors.nombre ? "input-error" : ""}
                            />
                            {/*<label style={{ color: errors.apellido ? "red" : "inherit" }}>
                                Apellido {errors.apellido && "*"}
                            </label>*/}
                            <input
                                type="text"
                                name="apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                placeholder="Apellido (Obligatorio)"
                                className={errors.apellido ? "input-error" : ""}
                            />
                        </div>
                        <div className="input-email-contraseña">
                            {/*<label style={{ color: errors.email ? "red" : "inherit" }}>
                                Correo {errors.email && "*"}
                            </label>*/}
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="ejemplo@email.com"
                                className={`input-email ${errors.email ? "input-error" : ""}`}
                            />
                            {/*<label style={{ color: errors.contraseña ? "red" : "inherit" }}>
                                Contraseña {errors.contraseña && "*"}
                            </label>*/}
                            <input
                                type="password"
                                name="contraseña"
                                value={formData.contraseña}
                                onChange={handleChange}
                                placeholder="Contraseña"
                                className={`input-contraseña ${errors.contraseña ? "input-error" : ""}`}
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
                        <ToastContainer />
                    </div>
                </form>
                <img src={AboutFrame} alt="About Frame" className="AboutFrame" />
                <div className="inicio-about">
                    <div className="about-txt">
                        <h3>Descubre más con JobJoin</h3>
                        <p>Encuentra servicios confiables para resolver tus necesidades</p>
                    </div>
                    <div className="about-images">
                        <div className="about-item">
                            <img src={EtiquetaComunicar} alt="Comunícate" />
                            <p>Comunícate directamente con el trabajador.</p>
                        </div>
                        <div className="about-item">
                            <img src={EtiquetaDescubrir} alt="Descubre" />
                            <p>Descubre perfiles detallados.</p>
                        </div>
                        <div className="about-item">
                            <img src={EtiquetaConectar} alt="Conecta" />
                            <p>Conecta con los mejores en tu zona.</p>
                        </div>
                        <div className="about-item">
                            <img src={EtiquetaMonitorear} alt="Monitorea" />
                            <p>Monitorea el avance de tus proyectos contratados.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
