import '../Css/MensajeBienvenidaCuentaNueva.css';
import MailIcon from "../Images/MailIcon.png";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function MensajeReenviarCodigo() {
    return (
        <div className="CuentaNueva-div">
            <div className="CuentaNueva-inicio">
                <img src={MailIcon} alt="HappyGreenFace" className='MailIcon'/>
                <div className="CuentaNueva-mensaje">
                    <h1>Se ha reenviado un código</h1>
                    <p>Se ha enviado otro código de verificación a</p>
                    <p className='CorreoUsuario'>correo@email.com</p>
                </div>
            </div>
            <div className="MRBotones">
                <button className="CN-B-iniciar">Aceptar</button>
            </div>
        </div>
    )
}
export const showWelcomeToast = () => {
    toast(<MensajeReenviarCodigo />, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};