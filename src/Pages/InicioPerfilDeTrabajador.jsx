import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import PerfilTrabajadorIcon from "../Images/InicioPerfilTrabajador.png"
import "../Css/InicioPerfilDeTrabajador.css"
import { Link } from "react-router-dom"

export default function InicioPerfilDeTrabajador(){
    return(
        <>
            <Header/>
            <div className="InicioPerfilDeTrabajador">
                <h1>Mi perfil de trabajador</h1>
                <p>Aún no has creado tu perfil de trabajador</p>
                <Link to="/crear-perfil-trabajador">Crear perfil de trabajador</Link>
                <img src={PerfilTrabajadorIcon} alt="PerfilInicioTrabajador Icon" />
            </div>
            <Footer/>
        </>
    )
}