import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import SolicitudTrabajo from "../Images/SolicitudTrabajo.png"
import SolicitudDeTrabajo from "../Components/SolicitudesDeTrabajo.jsx"
import "../Css/InicioPerfilDeTrabajador.css"
import { useState } from "react"

export default function SolicitudesDeTrabajo(){
    const [showUpdateProfile, setShowUpdateProfile] = useState(false);

    const handleUpdateProfileClick = () => {
        setShowUpdateProfile(true);
    }
    return(
        <>
            <Header/>
            <div className="InicioPerfilDeTrabajador">
                <div className="InicioPerfilDeTrabajador-Texto">
                    <p className="InicioPerfilDeTrabajador-h1">Solicitudes de trabajo</p>
                    <p>Aquí encontrarás las solicitudes que redibas para realizar servicios.</p>
                </div>
                <div className="InicioPerfilDeTrabajador-Texto">
                    {!showUpdateProfile ? (
                        <>
                            <p>Aún no tienes solicitudes de trabajo. Mantén tu perfil actualizado para aumentar tus posibilidades de ser contactado</p>
                            <button to="#" onClick={handleUpdateProfileClick}>Actualizar mi perfil</button>
                            <img src={SolicitudTrabajo} alt="PerfilInicioTrabajador Icon" />
                        </>
                    ) : (
                        <div>
                            <SolicitudDeTrabajo/>
                            <SolicitudDeTrabajo/>
                            <SolicitudDeTrabajo/>
                            <SolicitudDeTrabajo/>
                            <SolicitudDeTrabajo/>
                        </div>
                    )}
                </div>
            </div>
            <Footer/>
        </>
    )
}