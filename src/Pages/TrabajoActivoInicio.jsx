import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import SolicitudTrabajo from "../Images/SolicitudTrabajo.png"
import "../Css/InicioPerfilDeTrabajador.css"

export default function TrabajoActivoInicio(){
    return(
        <>
            <Header/>
            <div className="InicioPerfilDeTrabajador">
                <div className="InicioPerfilDeTrabajador-Texto">
                    <p className="InicioPerfilDeTrabajador-h1">Trabajo activo</p>
                    <p>Aún no tienes un trabajo activo</p>
                </div>
                <p>Empieza contratando u ofreciendo tus servicios</p>
                <button>Explorar Trabajadores</button>
                <img src={SolicitudTrabajo} alt="PerfilInicioTrabajador Icon" />
                <div>
                </div>
            </div>
            <Footer/>
        </>
    )
}