import '../Css/MensajeBienvenidaCuentaNueva.css';
import IniciaSesiónParaContinuar from '../Images/IniciaSesiónParaContinuar.png';
export default function MensajeReenviarCodigo() {
    return (
<div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={IniciaSesiónParaContinuar} alt="Infoicon" className='ErrorIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>¿Estas seguro de guardar los cambios?</h1>
                    <p>Una vez guardados, los cambios serán aplicados de forma permanente</p>
                </div>
            </div>
            <div className="CuentaNueva-botones">
                <button className="CN-B-salir">Cancelar</button>
                <button className="CN-B-iniciar">Guardar cambios</button>
            </div>
        </div>
    )
}