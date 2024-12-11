import '../Css/PerfilTrabajadorViñeta.css';
import PerfilTrabajador from "../Images/PerfilTrabajador.png";
import UbicaciónIcon from "../Images/UbicaciónIcon.png";
import Stars from "../Images/Stars.png";
import InfoIcon from "../Images/InfoIcon.png";
import CategoriaIcon from "../Images/CategoriaIcon.png";

export default function PerfilTrabajadorViñeta() {
    return(
        <div className='MainDiv'>
            <div className='Costo'>
                <nav> <img src={CategoriaIcon} alt="CategoriaIcon" />Plomería</nav>
                <div>
                    <p className='p1'>Desde</p>
                    <p>$250</p>
                </div>
            </div>
            <div className='Perfil'>
                <img src={PerfilTrabajador} alt="PerfilTrabajador"/>
                <div className='PerfilInfo'>
                    <p>Berlin Pérez</p>
                    <div className='PerfilUbicación'>
                        <img src={UbicaciónIcon} alt="UbicaciónIcon" />
                        <p>Cuauhtémoc, CDMX</p>
                        <img src={Stars} alt="StarsRating" />
                    </div>
                </div>
            </div>
            <div className='Disponibilidad'>
                <div className='DiasSemana'>
                    <p className='DispobilidadP1'>Disponibilidad</p>
                    <p className='DiasSemanaInfo'>Lunes</p>
                </div>
                <div className='Horario'>
                    <p className='DispobilidadP1'>Horario</p>
                    <p className='HorarioInfo'>9:00 AM - 5:00 PM</p>
                </div>
            </div>
            <div className='ViñetaText'>
                <img src={InfoIcon} alt="InfoIcon" />
                <p>Más días y horarios diponibles en el perfil</p>
            </div>
            <div className='ContactoBotones'>
                <button className='ContactoPerfil'>Ver perfil</button>
                <button className='ContactoContactar'>Contactar</button>
            </div>
        </div>
    )
}