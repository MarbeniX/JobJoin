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
                <input placeholder="Ciudad y/o zona donde e brinda el servicio" />
                <p className="CrearPerfilTrabajador-titulo">Servicio que se ofrece</p>

                <div>
                    <div>
                        <p className="CrearPerfilTrabajador-titulo">Tarifa desde*</p>
                        <div>
                            <img src={DineroIcon} alt="Signo de dolares" />
                            <input placeholder="XXXX" />
                        </div>
                    </div>
                    <div>
                        <p className="CrearPerfilTrabajador-titulo">Número de telefono</p>
                        <input placeholder="XXXX-XXXX-XXXX" />
                    </div>
                    <div>
                        <p className="CrearPerfilTrabajador-titulo">Descripción del servicio*</p>
                        <input placeholder="Incluye detalles sobre tu trabajo y habilidades"/>
                    </div>
                    <div>
                        <button>Cancelar</button>
                        <button>Guardar información</button>
                    </div>
                </div>
            </form>

            <Footer />
        </>
    )
}
