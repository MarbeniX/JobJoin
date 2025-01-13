import FullProfilePicture from "../Images/FullProfilePicture.png";
import RelojIcon from "../Images/RelojIcon.png";

export default function TrabajoActivoStatus(){
    return(
        <div>
            <img src={FullProfilePicture} alt="FullProfilePicture" />
            <div>
                <div>
                    <span><img src={RelojIcon} alt="RelojIcon" />En espera de respuesta</span>
                    <p>Juan Pérez</p>
                    <p>Plomería</p>
                </div>
                <button>Cancelar servicio</button>
            </div>
        </div>
    )
}