import "../Css/Headers&Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="inicio-footer">
            <div className="footer-info">
                <h4>JobJoin</h4>
                <Link to="">Acerca de</Link>
                <Link to="">Contacto</Link>
            </div>
            <div className="footer-info">
                <h4>Información</h4>
                <Link>Términos y condiciones</Link>
                <Link>Política de privacidad</Link>
                <Link>Preguntas y condiciones</Link>
            </div>
            <div className="footer-info">
                <h4>Empleados</h4>
                <a href="#">Cómo contratar</a>
                <a href="#">Beneficios</a>
            </div>
            <div className="footer-info">
                <h4>Trabajadores</h4>
                <a href="#">Beneficios</a>
            </div>
            <div className="footer-info">
                <h4>Soporte</h4>
                <a href="#">Ayuda</a>
                <a href="#">Reportar un problema</a>
            </div>
        </footer>
    );
}
