import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/FullProfilePicture.png"
import "../Css/PerfilHistorialSinHIstorial.css"

export default function PerfilHistorialSinHistorial(){
    return(
        <div className="perfilHistorialSinHistorial">
            <Header/>
            <h1>Mi perfil</h1>
            <div className="perfilHistorial">
                <div className="perfilHistorial-datos">
                    <img src={FullProfilePicture} alt="FullProfilePicture" />
                    <div className="perfilHistorial-datos-info">
                        <h5>Melissa Nuñez</h5>
                        <h6>melissa@email.com</h6>
                    </div>
                    <button>Editar información</button>
                </div>
                <div className="perfilHistorial-historial">
                    <div className="perfilHistorial-historial-menu">
                        <h3>Historial</h3>
                        <h3>Configuración</h3>
                    </div>
                    <div className="perfilHistorial-historial-registro">
                        <div>
                            <h2>¡Aún no tienes historial!</h2>
                            <p>Empieza a aprovechar al máximo JobJoin y contrata a los mejores</p>
                        </div>
                        <button>Buscar un servicio</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}