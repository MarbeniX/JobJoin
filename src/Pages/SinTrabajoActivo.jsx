import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import SinTrabajoActivoIcon from "../Images/SinTrabajoActivo.png"
import "../Css/InicioPerfilDeTrabajador.css"

export default function SinTrabajoActivo(){
    return(
        <>
            <Header/>
            <div className="SinTrabajoActivo">
                <div className="InicioPerfilDeTrabajador-Texto">
                    <p className="InicioPerfilDeTrabajador-h1">Trabajo activo</p>
                    <p>Aún no tienes un trabajo activo.</p>
                </div>
                <p>Empieza contratando u ofreciendo tus servicios.</p>
                <button>Explorar Trabajadores</button>
                <img src={SinTrabajoActivoIcon} alt="PerfilInicioTrabajador Icon" />
            </div>
            <Footer/>
        </>
    )
}