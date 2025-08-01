import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/FullProfilePicture.png"
import ElectricidadIcon from "../Images/ElectricidadIcon.png"
import EmptyStars from "../Images/StarsEmpty.png"
import AboutFrame from "../Images/About Frame.png"
import DawnwardRow from "../Images/DownwardRow.png"
import "../Css/VistaPerfilTrabajador.css"

export default function VistaPerfilTrabajador() {
    return (
        <>
            <Header />
            <div className="VistaPerfilTrabajador">
                <img src={FullProfilePicture} alt="Foto de perfil completa" />
                <h1>Melissa Nuñez</h1>
                <button to="">Editar perfil</button>
                <p>Benito Juárez, CDMX</p>
                <div className="VistaPerfilTrabajador__skills">
                    <img src={ElectricidadIcon} alt="Electricidad icon" />
                    <p>Electricidad</p>
                </div>
            </div>
            <div className="VistaPerfilTrabajador__description">
                <p>Desde $250</p>
                <button to="">Contactame</button>
            </div>
            <div className="VistaPerfilTrabajador__about">
                <div className="VistaPerfilTrabajador__about__text">
                    <p>Experta en electricidad, con más de 5 años de experiencia en instalaciones residenciales y comerciales. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt nobis explicabo laudantium fugit. Aperiam itaque fugiat veniam harum sint ipsam, sit minima dolor quaerat accusantium hic quo ex! Esse, voluptas.</p>
                </div>
                <div className="VistaPerfilTrabajador__about__status">
                    <p>Estado</p>
                    <button>Cambiar estado <img src={DawnwardRow} alt="" /></button>
                </div>
            </div>
            <div className="VistaPerfilTrabajador__reviews">
                <img src={AboutFrame} alt="Abourframe" />
                <h2>Calificaciones y <br /> comentarios</h2>
                <p>Conoce las reseñas de otros empleadores y toma una decisión informada.</p>
                <div className="VistaPerfilTrabajador__reviews__stars">
                    <img src={EmptyStars} alt="EmtpyStars" />
                    <p>sin calificaciones</p>
                </div>
                <p className="VistaPerfilTrabajador_lastp">No hay comentarios por el momento</p>
            </div>
            <Footer />
        </>
    )
}