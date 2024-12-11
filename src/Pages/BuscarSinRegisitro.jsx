import '../Css/BuscarSinRegistro.css';
import JobJoin from '../Images/JobJoin.png';
import LupaIcon from "../Images/LupaLogo.png";
import VectorIcon from "../Images/VectorIcon.png";
import FlechaIcon from "../Images/FlechaIcon.png";
import Footer from "../Components/Footer.jsx";
import PerfilTrabajadorViñeta from '../Components/PerfilTrabajadorViñeta.jsx';

export default function BuscarSinRegistro() {
    return(
        <div className='BuscarSinRegistro-div'>
            <header>
                <img src={JobJoin} alt="JobJoinLogo" />
                <div>
                    <button className='IniciarSesión-button'>Iniciar seción</button>
                    <button className='Unirse-button'>Unirse</button>
                </div>
            </header>
            <div className='InfoAbout'>
                <h1>Busca, elige y contrata fácilmente</h1>
                <p>Encuentra opciones cercanas y personaliza tu búsqueda según lo que necesitas.</p>
                <div className='InfoInputs'>
                    <div className='InfoProfesión'>
                        <img src={LupaIcon} alt="LupaIcon" />
                        <input type="text" placeholder='Ej. Plomero, limpieza, carpintería'/>
                    </div>
                    <div className='InfoFiltro'>
                        <img src={VectorIcon} alt="VectorIcon" />
                        <button>Más filtros</button>
                    </div>
                    <button className='InfoBuscarButton'>Buscar</button>
                    <div className='InfoText'>
                        <h3>Explora algunos perfiles</h3>
                        <p>Aquí están los expertos listos para apoyarte en tusproyectos.</p>
                    </div>
                </div>
            </div>
            <div className='Perfiles'>
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />
                <PerfilTrabajadorViñeta />

            </div>
            <div className='MostrarMasPefiles'>
                <button>Mostrar más perfiles</button>
                <img src={FlechaIcon} alt="FlechaIcon" />
            </div>
            <Footer />
        </div>
    )
}