import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/FullProfilePicture.png"
import DineroIcon from "../Images/DineroIcon.png"
import "../Css/CrearPerfilTrabajador.css"
export default function CrearPerfilTrabajador() {
    return (
        <>
            <Header />
            <div className="CrearPerfilTrabajador">
                <img src={FullProfilePicture} alt="Foto de perfil completa" />
                <h1>Melissa Nuñez</h1>
            </div>
            <form className="CrearPerfilTrabajador-form">
                <p className="CrearPerfilTrabajador-p1">Campos obligatorios*</p>
                <p className="CrearPerfilTrabajador-titulo">Ubicación</p>
                <input placeholder="Ciudad y/o zona donde e brinda el servicio" className="CrearPerfilTrabajador-input"/>

                <p className="CrearPerfilTrabajador-titulo">Servicio que se ofrece*</p>
                <div className="CrearPerfilTrabajador-profesiones">
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label for="Albañileria">Albañileria</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Carpinteria</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Cuidado infantil</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Eletricidad</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Jardinería</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Limpieza</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Plomería</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Tutoría</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">  
                        <input type="radio" name="profesión"/>
                        <label>Reparaciones</label>
                    </div>
                    <div className="CrearPerfilTrabajador-profesiones-item">
                        <input type="radio" name="profesión"/>
                        <label>Otro</label>
                    </div>
                </div>

                <div className="CrearPerfilTrabajador-servicios">
                    <div className="CrearPerfilTrabajador-servicio-item">
                        <div className="CrearPerfilTrabajador-servicio-item-titulo">
                            <p className="CrearPerfilTrabajador-titulo">Tarifa desde*</p>
                            <div className="CrearPerfilTrabajador-input-icon">
                                <img src={DineroIcon} alt="Signo de dolares" />
                                <input placeholder="XXXX" className="CrearPerfilTrabajador-input"/>
                            </div>
                        </div>
                        <div className="CrearPerfilTrabajador-servicio-item-titulo">
                            <p className="CrearPerfilTrabajador-titulo">Número de teléfono</p>
                            <input placeholder="XXXX-XXXX-XXXX" className="CrearPerfilTrabajador-input"/>
                        </div>
                    </div>
                    <div>
                        <p className="CrearPerfilTrabajador-titulo">Descripción del servicio*</p>
                        <input placeholder="Incluye detalles sobre tu trabajo y habilidades" className="CrearPerfilTrabajador-input"/>
                    </div>
                    <div className="CrearPerfilTrabajador-servicio-item-titulo-2">
                        <button className="CrearPerfilTrabajador-button1">Cancelar</button>
                        <button className="CrearPerfilTrabajador-button2">Guardar información</button>
                    </div>
                </div>
            </form>

            <Footer />
        </>
    )
}
