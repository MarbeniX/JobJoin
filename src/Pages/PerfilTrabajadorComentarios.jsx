import Header from "../Components/Headers/HeaderSesiónIniciada"
import Footer from "../Components/Footer"
import FullProfilePicture from "../Images/FullProfilePicture.png"
import ElectricidadIcon from "../Images/ElectricidadIcon.png"
import PalomitaIcon from "../Images/PalomitaIcon.png"
import EmptyStars from "../Images/StarsEmpty.png"
import AboutFrame from "../Images/About Frame.png"
import StarsFull from "../Images/StarsFull.png"
import "../Css/VistaPerfilTrabajador.css"
import Comentarios from "../Components/ComentariosPerfilTrabajadorComentarios"
import ViñetaPerfilTrabajador from "../Components/PerfilTrabajadorViñeta"

export default function PerfilTrabajadorComentarios(){
    return(
        <>
            <Header/>
            <div className="VistaPerfilTrabajador">
                <img src={FullProfilePicture} alt="Foto de perfil completa" />
                <h1>Melissa Nuñez</h1>
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
                    <div className="VistaPerfilTrabajador__about__status__button">
                        <img src={PalomitaIcon} alt="Palomita icon " />
                        <p>Disponible</p>
                    </div>
                </div>
            </div>
            <div className="VistaPerfilTrabajador__reviews">
                <img src={AboutFrame} alt="Abourframe" />
                <h2>Calificaciones y <br /> comentarios</h2>
                <p>Conoce las reseñas de otros empleadores y toma una decisión informada.</p>
                <div className="VistaPerfilTrabajador__reviews__stars">
                    <div className="VistaPerfilTrabajador__reviews__stars__rating">
                        <p>4.4</p>
                        <img src={StarsFull} alt="StarsFull" />
                    </div>
                    <p>9 calificaciones</p>
                </div>
                <div>
                    <Comentarios/>
                    <Comentarios/>
                    <Comentarios/>
                    <Comentarios/>
                </div>

                <div className="VistaPerfilTrabajador__reviews__more">
                    <h2>¿Buscas más opciones?</h2>
                    <p>Explora otros perfiles que podrían ajustarse a tus necesidades.</p>
                    <div className="VistaPerfilTrabajador__reviews__more__profiles">
                        <ViñetaPerfilTrabajador/>
                        <ViñetaPerfilTrabajador/>
                        <ViñetaPerfilTrabajador/>
                        <ViñetaPerfilTrabajador/>
                        <ViñetaPerfilTrabajador/>
                        <ViñetaPerfilTrabajador/>  
                    </div>
                    <div className="VistaPerfilTrabajador__reviews__more__buttons">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}