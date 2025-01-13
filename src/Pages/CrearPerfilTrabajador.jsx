import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/FullProfilePicture.png"
import DineroIcon from "../Images/DineroIcon.png"
import "../Css/CrearPerfilTrabajador.css"
import { useUserContext } from "../UserProvider/UserProvider"
import { useState } from "react"
import axios from "axios"
export default function CrearPerfilTrabajador() {
    const { user } = useUserContext();
    const [fotoPerfil, setFotoPerfil] = useState(""); // Para almacenar la imagen
    const [location, setLocation] = useState("");
    const [service, setService] = useState("");
    const [tariff, setTariff] = useState("");
    const [phone, setPhone] = useState("");
    const [description, setDescription] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFotoPerfil(file);
        }
    };
    // Función para enviar los datos del perfil al servidor
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        {/*formData.append("fotoPerfil", fotoPerfil);*/}
        formData.append("location", location);
        formData.append("service", service);
        formData.append("tariff", tariff);
        formData.append("phone", phone);
        formData.append("description", description);
        formData.append("userId", user.idUsuario); // Suponiendo que el ID del usuario se guarda en el contexto

        try {
            // Enviar los datos al servidor
            const response = await axios.post("http://localhost:5000/users/crear-trabajador", formData, {
                headers: {
                    "Content-Type": "multipart/form-data" // Especificar que estamos enviando FormData
                }
            });
            if (response.data.success) {
                // Mostrar mensaje de éxito
                console.log("Perfil creado correctamente.");
            } else {
                // Mostrar mensaje de error
                console.log("Hubo un error al crear el perfil.");
            }
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };

    return (
    <>
            <Header />
            <div className="CrearPerfilTrabajador">
                <div className="CrearPerfilTrabajador-header">
                    <img src={fotoPerfil || FullProfilePicture} alt="Foto de perfil" className="fotoPerfil" />
                    <input type="file" accept="image/*" onChange={handleFileChange} className="file-input" />
                    <h1>{user.nombre || "Melissa Nuñez"}</h1>
                </div>
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
                    {["Albañileria", "Carpinteria", "Cuidado infantil", "Electricidad", "Jardinería", "Limpieza", "Plomería", "Tutoría", "Reparaciones", "Otro"].map((profesion) => (
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
                        <div className="CrearPerfilTrabajador-servicio-item-titulo">
                            <p className="CrearPerfilTrabajador-titulo">Tarifa desde*</p>
                            <div className="CrearPerfilTrabajador-input-icon">
                                <img src={DineroIcon} alt="Signo de dolares" />
                                <input
                                    placeholder="XXXX"
                                    value={tariff}
                                    onChange={(e) => setTariff(e.target.value)}
                                    className="CrearPerfilTrabajador-input"
                                />
                            </div>
                        </div>
                        <div className="CrearPerfilTrabajador-servicio-item-titulo">
                            <p className="CrearPerfilTrabajador-titulo">Número de teléfono</p>
                            <input
                                placeholder="XXXX-XXXX-XXXX"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="CrearPerfilTrabajador-input"
                            />
                        </div>
                    </div>
                    <div>
                        <p className="CrearPerfilTrabajador-titulo">Descripción del servicio*</p>
                        <input
                            placeholder="Incluye detalles sobre tu trabajo y habilidades"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="CrearPerfilTrabajador-input"
                        />
                    </div>
                    <div className="CrearPerfilTrabajador-servicio-item-titulo-2">
                        <button type="button" className="CrearPerfilTrabajador-button1">
                            Cancelar
                        </button>
                        <button type="submit" className="CrearPerfilTrabajador-button2">
                            Guardar información
                        </button>
                    </div>
                </div>
            </form>
            <Footer />
        </>
    )
}
