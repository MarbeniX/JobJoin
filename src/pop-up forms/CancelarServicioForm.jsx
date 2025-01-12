import "../Css/CancelarServicioForm.css";

export default function CancelarServicioForm(){
    return(
        <form className="cancelar-servicio-form">
            <div className="cancelar-servicio-form-header">
                <h2>Por favor, indícanos el motivo de la cancelación.</h2>
                <p>Esto ayudará a mejorar nuestras recomendaciones y servicios en el futuro.</p>
            </div>
            <div className="cancelar-servicio-form-body">
                <h3>Campos obligatorios*</h3>
                <p>Motivo de cancelación</p>
                <ol>
                    <li>
                        <input type="radio"/>
                        <label htmlFor="">No estaba de acuerdo con la tarifa</label>
                    </li>
                    <li>
                        <input type="radio"/>
                        <label htmlFor="">No se llegó a un acuerdo con el trabajador</label>
                    </li>
                    <li>
                        <input type="radio"/>
                        <label htmlFor="">Cambio de planes</label>
                    </li>
                    <li>
                        <input type="radio"/>
                        <label htmlFor="">El servicio ya no es necesario</label>
                    </li>
                    <li>
                        <input type="radio"/>
                        <label htmlFor="">Encontré otro proveedor</label>
                    </li>
                    <li>
                        <input type="radio"/>
                        <label htmlFor="">No estoy satisfecho con el proveedor</label>
                    </li>
                </ol>
            </div>
            <div className="cancelar-servicio-form-footer">
                <p>Comentarios adicionales</p>
                <input type="text" placeholder="Si tienes otro motivo o algo más que compartir, escríbelo aquí."/>
            </div>
            <div className="cancelar-servicio-form-buttons">
                <button className="cancelar-servicio-form-buttons-b1">Volver atrás</button>
                <button className="cancelar-servicio-form-buttons-b2">Cancelar servicio</button>
            </div>
        </form>
    )
}