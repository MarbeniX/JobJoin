import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import PerfilTrabajadorIcon from "../Images/InicioPerfilTrabajador.png"
import "../Css/InicioPerfilDeTrabajador.css"

export default function InicioPerfilDeTrabajador(){
    return(
        <>
            <Header/>
            <div className="InicioPerfilDeTrabajador">
                <h1>Mi perfil de trabajador</h1>
                <p>Aún no has creado tu perfil de trabajador</p>
                <button>Crear perfil de trabajador</button>
                <img src={PerfilTrabajadorIcon} alt="PerfilInicioTrabajador Icon" />
            </div>
            <Footer/>
        </>
    )
}