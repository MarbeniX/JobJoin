import Header from "../Components/Headers/HeaderSesiónIniciada";
import Footer from "../Components/Footer";
import "../Css/CrearPerfilTrabajador.css";
import { useUserContext } from "../UserProvider/UserProvider";
import { useState } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import { showConfirmSaveToast } from '../Messages/MensajeConfirmarGuardarCambios';
import { showExitConfirmationToast } from "../Messages/MensajeEstasSeguroDeSalir";
import 'react-toastify/dist/ReactToastify.css';
import FullProfilePicture from "../Images/PerfilTrabajador.png"

export default function CrearPerfilTrabajador() {
    const { user } = useUserContext();
    const [location, setLocation] = useState("");
    const [habilidades, setService] = useState("");
    const [tarifaPorHora, setTariff] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");

    // Función para enviar los datos del perfil al servidor
    const handleSubmit = async (e) => {
        e.preventDefault();

        const profileData = {
            userId: user.idUsuario, // ID del usuario desde el contexto
            location,
            habilidades,
            tarifaPorHora,
            phone,
            description
        };

        try {
            // Enviar los datos al servidor
            const response = await axios.post("http://localhost:5000/trabajador/crear-trabajador", profileData, {
                headers: {
                    "Content-Type": "application/json"
                }
                
            });
            //Verificar si la respuesta fue exitosa
            if (response.data.success === "Perfil creado correctamente") {
                console.log("Perfil creado correctamente.");
            } else {
                console.log("Hubo un error al crear el perfil.");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };

    const handleSaveChanges = () => {
        showConfirmSaveToast();
    };
    const handleCancelChanges = () => {
        showExitConfirmationToast();
    }

    return (
        <>
            <Header />
            <div className="CrearPerfilTrabajador">
            <img src={FullProfilePicture} alt="Foto de perfil" className="fotoPerfil" />
                <h1>{user.nombre || "Nombre del usuario"}</h1>
            </div>
            <form className="CrearPerfilTrabajador-form" onSubmit={handleSubmit}>
                <p className="CrearPerfilTrabajador-p1">Campos obligatorios*</p>
                <p className="CrearPerfilTrabajador-titulo">Ubicación</p>
                <input
                    placeholder="Ciudad y/o zona donde se brinda el servicio"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="CrearPerfilTrabajador-input"
                />

                <p className="CrearPerfilTrabajador-titulo">Servicio que se ofrece*</p>
                <div className="CrearPerfilTrabajador-profesiones">
                    {["Albañilería", "Carpintería", "Cuidado infantil", "Electricidad", "Jardinería", "Limpieza", "Plomería", "Tutoría", "Reparaciones", "Otro"].map((profesion) => (
                        <div className="CrearPerfilTrabajador-profesiones-item" key={profesion}>
                            <input
                                type="radio"
                                name="profesion"
                                value={profesion}
                                onChange={(e) => setService(e.target.value)}
                            />
                            <label>{profesion}</label>
                        </div>
                    ))}
                </div>

                <div className="CrearPerfilTrabajador-servicios">
                    <div className="CrearPerfilTrabajador-servicio-item">
                        <p className="CrearPerfilTrabajador-titulo">Tarifa desde*</p>
                        <input
                            placeholder="XXXX"
                            value={tarifaPorHora}
                            onChange={(e) => setTariff(e.target.value)}
                            className="CrearPerfilTrabajador-input"
                        />

                        <p className="CrearPerfilTrabajador-titulo">Número de teléfono</p>
                        <input
                            placeholder="XXXX-XXXX-XXXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="CrearPerfilTrabajador-input"
                        />
                    </div>

                    <p className="CrearPerfilTrabajador-titulo">Descripción del servicio*</p>
                    <input
                        placeholder="Incluye detalles sobre tu trabajo y habilidades"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="CrearPerfilTrabajador-input"
                    />

                    <div className="CrearPerfilTrabajador-servicio-item-titulo-2">
                        <button type="button" className="CrearPerfilTrabajador-button1" onClick={handleCancelChanges}>
                            Cancelar
                        </button>
                        <button type="submit" className="CrearPerfilTrabajador-button2" onClick={handleSaveChanges}>
                            Guardar información
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </form>
            <Footer />
        </>
    );
}
