import "../Css/ContactarTrabajadorPopups.css";

export default function ContactarTrabajadorPopup(){
    return(
        <form className="contactar-trabajador-popup">
            <p>Contactar a Mario Contreras</p>
            <div className="contactar-trabajador-popup-content">
                <p>Campos obligatorios*</p>
                <div className="contactar-trabajador-popup-content-inputs">
                    <p>Descripción delservicio*</p>
                    <input type="text" placeholder="Describe los detalles del trasbajo que necesitas realizar"/>
                </div>
                <div className="contactar-trabajador-popup-content-inputs">
                    <p>Ubicación*</p>
                    <input type="text" placeholder="Especifica la dirección o zona donde se realizará el trabajo"/>
                </div>
            </div>
            <div className="contactar-trabajador-popup-content-buttons">
                <button className="contactar-trabajador-popup-content-buttons-b1">Descartar</button>
                <button className="contactar-trabajador-popup-content-buttons-b2">Solicitar servicio</button>
            </div>
        </form>
    )
}