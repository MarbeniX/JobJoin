import '../Css/PerfilTrabajadorViñeta.css';
import PerfilTrabajador from "../Images/PerfilTrabajador.png";
import UbicaciónIcon from "../Images/UbicaciónIcon.png";
import Stars from "../Images/Stars.png";
import InfoIcon from "../Images/InfoIcon.png";

export default function PerfilTrabajadorViñeta() {
    return(
        <div className='MainDiv'>
            <div className='Costo'>
                <p>Categoria</p>
                <div>
                    <p>Desde <nav>$xxx</nav></p>
                </div>
            </div>
            <div className='Perfil'>
                <img src={PerfilTrabajador} alt="PerfilTrabajador"/>
                <div className='PerfilInfo'>
                    <p>Juan Pérez</p>
                    <div className='PerfilUbicación'>
                        <img src={UbicaciónIcon} alt="UbicaciónIcon" />
                        <p>Cuauhtémoc, CDMX</p>
                    </div>
                    <img src={Stars} alt="StarsRating" />
                </div>
            </div>
            <div className='Disponibilidad'>
                <div className='DiasSemana'>
                    <p>Disponibilidad</p>
                    <p>Lunes</p>
                </div>
                <div className='Horario'>
                    <p>Horario</p>
                    <p>9:00 AM - 5:00 PM</p>
                </div>
            </div>
            <div className='InfoText'>
                <img src={InfoIcon} alt="InfoIcon" />
                <p>Más días y horarios diponibles en el perfil</p>
            </div>
            <div className='ContactoBotones'>
                <button>Ver perfil</button>
                <button>Contactar</button>
            </div>
        </div>
    )
}