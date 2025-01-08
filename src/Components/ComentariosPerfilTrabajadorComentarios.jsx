import StarsHalf from "../Images/StarsHalf.png"
import "../Css/ComentariosPerfilTrabajadorComentarios.css"  

export default function ComentariosPerfilTrabajadorComentarios() {
    return (
        <>
            <div className="ComentariosPerfilTrabajadorComentarios">
                <h3>No cumplió con mis espectativas</h3>
                <div className="ComentariosPerfilTrabajadorComentarios__user">
                    <p>Claudia Pérez</p>
                    <p>08/11/2024</p>
                </div>
                <p>El trabajador no terminó el servicio en el tiempo acordado. Tuvo que regresar otro día para finalizar.</p>
                <img src={StarsHalf} alt="StarsHalf" />
            </div>
        </>
    )
}
