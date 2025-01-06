import "../Css/RegistroDeServicios.css"
import PalomitaIcon from "../Images/PalomitaIcon.png"
export default function RegistroDeServicios() {
    return (
        <div className="registroDeServicios">
            <div className="registroDeServicios-titulo">
                <p>Trabajo</p>
                <div className="registroDeServicios-titulo-estado">
                    <img src={PalomitaIcon} alt="PalomitaIcon" />
                    <p>Completado</p>
                </div>
            </div>
            <div className="registroDeServicios-info">
                <p className="">Mario Contreras</p>
                <div className="registroDeServicios-info-detalles">
                    <div className="registroDeServicios-info-detalles1">
                        <p className="registroDeServicios-info-detallesp1">Fecha del servicio</p>
                        <p>Día del servicio</p>
                    </div>
                    <div className="registroDeServicios-info-detalles1">
                        <p className="registroDeServicios-info-detallesp1">Tarifa</p>
                        <p>$250</p>
                    </div>
                </div>
            </div>
            <button className="RegistroServicio-button">+ Más detalles</button>
        </div>
    )
}