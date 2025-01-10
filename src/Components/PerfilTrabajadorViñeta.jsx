import '../Css/PerfilTrabajadorViñeta.css';
import PerfilTrabajador from "../Images/PerfilTrabajador.png";
import InfoIcon from "../Images/InfoIcon.png";
import PlomeriaIcon from "../Images/PlomeriaIcon.png";
import PalomitaIcon from "../Images/PalomitaIcon.png";
import StarsHalf from "../Images/StarsHalf.png";

export default function PerfilTrabajadorViñeta() {
    return(
        <div className='MainDiv'>
            <div className='Costo'>
                <nav> <img src={PlomeriaIcon} alt="PlomeriaIcon" />Plomería</nav>
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
                        <img src={PalomitaIcon} alt="PalomitaIcon" />
                        <p>Disponible</p>
                    </div>
                </div>
            </div>
            <div className='Disponibilidad'>
                <div className='DiasSemana'>
                    <p className='DispobilidadP1'>Ubicación</p>
                    <p>Ubicación, mx.</p>
                </div>
                <div className='Horario'>
                    <p className='DispobilidadP1'>Calificación</p>
                    <img src={StarsHalf} alt="StarsHalf" />
                </div>
            </div>
            <div className='ContactoBotones'>
                <button className='ContactoPerfil'>Ver perfil</button>
                <button className='ContactoContactar'>Contactar</button>
            </div>
        </div>
    )
}